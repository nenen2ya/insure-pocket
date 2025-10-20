import React from "react";
// import { Link } from "react-router-dom";
import InsuranceCard from "../components/InsuranceCard";
import hanhwa from "../assets/img/company/hanhwa.png";
import metlife from "../assets/img/company/metlife.png";
import samsung from "../assets/img/company/samsung.png";
import ReportCard from "../components/ReportCard";


const Report: React.FC = () => {
  const username = "윤시윤"; // Replace with actual user data if available
  const nums = 3; // Replace with actual number of insurances if available
  const imgsrcs = [hanhwa, metlife, samsung];
  const titles = ["한화생명 보험", "메트라이프 보험", "삼성생명 보험"];
  const prices = [27500, 10000, 32000];

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap: 10
      }}>
      <h2 style={{fontSize:40}}>{username}님 보험</h2>
      <h2 style={{color:"#2563EB", fontSize:45}}>종합 분석</h2>
      <h2 style={{fontSize:40}}>리포트</h2>
      </div>
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
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:10
        }}>
          <InsuranceCard
          imgSrc ={imgsrcs[0]} title={titles[0]} price={prices[0]} width="400px" height="84px"></InsuranceCard>
          <InsuranceCard
          imgSrc ={imgsrcs[1]} title={titles[1]} price={prices[1]} width="400px" height="84px"></InsuranceCard>
          <InsuranceCard
          imgSrc ={imgsrcs[2]} title={titles[2]} price={prices[2]} width="400px" height="84px"></InsuranceCard>
        </div>
      </ReportCard>
      <ReportCard title="월 보험료">
        <p>그래프</p>
      </ReportCard>
      </div>
      <ReportCard title="요약" width="980px" height="500px"> 
        <p>요약</p>
      </ReportCard>
      <ReportCard title="종합 코멘트" width= "980px" height="200px">
        <p style={{
          display:"flex",
          justifyContent:"flex-start"
        }}>{username}님의 가입 상품은 뭐고, 이래서 그래요</p>
      </ReportCard>
      </div>
    </div>
  );
};

export default Report;
