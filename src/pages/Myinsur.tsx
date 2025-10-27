import React, { useEffect, useState } from "react";
import ReportCard from "../components/ReportCard";
import MyPageCard from "../components/MyPageCard";
import { companyImgs, defaultCompanyImg } from "../data/company_img";
import { axiosClient } from "../lib/axiosClient";


const Myinsur: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      alert("로그인이 필요합니다.");
      return;
    }
const fetchData = async () => {
  try {
    const res = await axiosClient.get(`/products/${userId}`);
    setData(res.data);
  } catch (error: any) {
    console.error("데이터 불러오기 실패:", error);

    const errMsg =
      error.response?.data?.detail ||
      error.message ||
      "데이터를 불러오는 중 오류가 발생했습니다.";
    alert(errMsg);
  } finally {
    setLoading(false);
  }
};

    fetchData();
  }, []);

  if (loading) {
    return <div style={{ paddingTop: "120px" }}>⏳ 데이터를 불러오는 중입니다...</div>;
  }

  if (!data) {
    return <div style={{ paddingTop: "120px" }}>데이터를 불러올 수 없습니다.</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: "100px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "40px", fontWeight: "500" }}>
          {data.user_name}님의
        </span>
        <span
          style={{ color: "#2563EB", fontSize: "45px", fontWeight: "500" }}
        >
          가입된 보험
        </span>
      </div>

      <div style={{ marginTop: "40px" }}>
        <ReportCard title={`총 ${data.user_products.length}개`} width="977px" height="auto">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "15px",
              marginBottom: "15px",
              gap: "20px",
            }}
          >
            {data.user_products.map((product: any) => (
              <MyPageCard
                key={product.id}
                imgSrc={companyImgs[product.company_name] || defaultCompanyImg}
                title={product.product_name}
                price={product.monthly_premium.toLocaleString()}
              />
            ))}
          </div>
        </ReportCard>
      </div>
    </div>
  );
};

export default Myinsur;
