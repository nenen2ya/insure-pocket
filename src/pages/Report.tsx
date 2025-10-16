import React from "react";
// import { Link } from "react-router-dom";
import InsuranceCard from "../components/InsuranceCard";
import miraeasset from "../assets/img/company/miraeasset.png"
import ReportCard from "../components/ReportCard";


const Report: React.FC = () => {
  const username = "KDA"; // Replace with actual user data if available
  const nums = 5; // Replace with actual number of insurances if available
  const imgsrc=miraeasset
  const title="무배당 올케어 보장 꽉 채운 암보험2509(갱신형)"
  const price=27500

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{username}님의 보험 종합 분석 리포트</h2>
      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"20px",
      }}>
      <div style={{
        display:"flex",
        flexDirection:"row",
        gap:"20px",
        justifyContent:'center'
      }}>
      <ReportCard title={`내 보험 ${nums}개`}>
          <InsuranceCard
          imgSrc ={imgsrc} title={title} price={price} width="400px" height="84px"
           ></InsuranceCard>
      </ReportCard>
      <ReportCard title="월 보험료">
        <p>그래프</p>
      </ReportCard>
      </div>
      <ReportCard title="요약" width="980px" >
        <p>요약</p>
      </ReportCard>
      </div>
    </div>
  );
};

export default Report;
