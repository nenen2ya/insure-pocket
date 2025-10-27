import React, { useEffect, useState } from "react";
import ReportCard from "../components/ReportCard";
import RecommendCard from "../components/RecommendCard";
import CancerGraph from "../components/CancerGraph";
import { companyImgs, defaultCompanyImg } from "../data/company_img";
import { axiosClient } from "../lib/axiosClient";


const SubReport: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [categoryCompare, setCategoryCompare] = useState<any[]>([]);
  const [recommendProducts, setRecommendProducts] = useState<any[]>([]);
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
        }}
      >
        <h2 style={{ fontSize: 40 }}>{userName}님</h2>
        <h2 style={{ color: "#2563EB", fontSize: 45 }}>{categoryName}</h2>
        <h2 style={{ fontSize: 40 }}>보험 세부 분석 리포트</h2>
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
              apiUrl="https://insure-pocket-back-1.onrender.com/pockets"
            />                        );
          })}
        </ReportCard>
      </div>
    </div>
  );
};

export default SubReport;
