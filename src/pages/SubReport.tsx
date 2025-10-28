import React, { useEffect, useState } from "react";
import ReportCard from "../components/ReportCard";
import RecommendCard from "../components/RecommendCard";
import CancerGraph from "../components/CancerGraph";
import { companyImgs, defaultCompanyImg } from "../data/company_img";
import { axiosClient } from "../lib/axiosClient";
import info from "../assets/img/info.png";

const SubReport: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [categoryCompare, setCategoryCompare] = useState<any[]>([]);
  const [recommendProducts, setRecommendProducts] = useState<any[]>([]);
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  const categoryName = "암";
  const categoryId = 1;
  const storedUserId = localStorage.getItem("user_id");
  const userId = storedUserId ? Number(storedUserId) : undefined;

useEffect(() => {
  const userId = localStorage.getItem("user_id");
  if (!userId) {
    alert("로그인이 필요합니다.");
    return;
  }

  const fetchData = async () => {
    try {
      const [userRes, reportRes] = await Promise.all([
        axiosClient.get(`/users/${userId}`),
        axiosClient.get(`/reports/${userId}/${categoryId}`),
      ]);

      const userData = userRes.data;
      const reportData = reportRes.data;

      setUserName(userData.user.user_name);
      setCategoryCompare(reportData.categories_compare || []);
      setRecommendProducts(reportData.products_recommendation || []);
    } catch (error) {
      console.error("데이터 로드 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  if (loading)
    return <div style={{ paddingTop: "120px" }}>⏳ 데이터를 불러오는 중입니다...</div>;

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          gap: 10,
          height: "fit-content",
          padding: "0 10px", 
        }}
      >
        <h2 style={{ fontSize: 40 }}>{userName}님</h2>
        <h2 style={{ color: "#2563EB", fontSize: 45 }}>{categoryName}</h2>
        <h2 style={{ fontSize: 40 }}>보험 세부 분석 리포트</h2>
      </div>
  <div style={{
    display:'flex',
    flexDirection:"column",
    alignItems:"flex-start",
    marginBottom:20,
    marginLeft:10
  }}>
  <p
    style={{
      fontSize: "24px",
      color: "#1E3A8A",
      margin: 0,
      marginBottom: "8px",
      fontWeight: "600",
      lineHeight: "1.6",
    }}
  >
    가입된 보험과 진단 내용을 기반으로 분석한 결과입니다.
  </p>
<div
  style={{
    display: "flex",
    gap: 6,
    position: "relative",
    alignItems: "baseline",
  }}
>
  <p
    style={{
      fontSize: "14px",
      color: "#1E3A8A",
      margin: 0,
      marginBottom: "8px",
      fontWeight: "400",
      lineHeight: "1.6",
    }}
  >
    *권장금액 : 연령, 성별 및 진단 결과를 기준으로 산출한 권장 보장 금액입니다.
  </p>
  <div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      position: "relative",
    }}
  >
    <img src={info} alt="info" style={{ width: 16, height: 16 }} />

    {hovered && (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "120%",
          transform: "translateY(-50%)",
          width: 260,
          backgroundColor: "rgba(0,0,0,0.85)",
          color: "white",
          borderRadius: 8,
          padding: "8px 12px",
          fontSize: 12,
          lineHeight: 1.5,
          whiteSpace: "normal",
          zIndex: 999,
        }}
      >
        부족 - 권장 금액의 -20% 미만<br/>적정 - 권장 금액의 ±20% 이내<br/>여유 - 권장 금액의 +20% 초과
      </div>
    )}
  </div>
</div>
</div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <ReportCard
          title={`${categoryName} 세부 종류별 보장금액 현황`}
          width="100%"
          height="fit-content"
        >
          <div
            style={{
              width: "980px",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {categoryCompare.map((item, i) => (
              <CancerGraph
                key={i}
                subtype={item.category}
                recommended_coverage={item.recommend ?? 0}
                coverage_amount={item.current ?? 0}
                state = {item.state??0}
              />
            ))}
          </div>
        </ReportCard>
        <ReportCard title="맞춤형 상품 추천" width="980px" height="100%">
          {recommendProducts.map((productObj: any) => {
            const p = productObj.product_info;
            const subcats = productObj.subcategory_info || [];

            return (
              <RecommendCard
              key={p.id}
              imgSrc={companyImgs[p.companies.company_name] || defaultCompanyImg}
              title={p.product_name}
              cancerKeywords={subcats.map((s: any) => s.subcategory_name)}
              href={p.companies.url}
              contents={[
                { keyword: p.keyword1, summary: p.summary1 },
                { keyword: p.keyword2, summary: p.summary2 },
                { keyword: p.keyword3, summary: p.summary3 },
              ]}
              selected={false}
              userId={userId}
              productId={p.id}
              apiUrl="https://insure-pocket-back.onrender.com/pockets"
            />                        );
          })}
        </ReportCard>
      </div>
    </div>
  );
};

export default SubReport;
