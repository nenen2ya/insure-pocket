import React from "react";
// import { Link } from "react-router-dom";
import hanhwa from "../assets/img/company/hanhwa.png";
import metlife from "../assets/img/company/metlife.png";
import samsung from "../assets/img/company/samsung.png";
import InsuranceCard from "../components/InsuranceCard";
import ReportCard from "../components/ReportCard";
import SummaryGraph from "../components/SummaryGraph";
import {useNavigate} from "react-router-dom";


const Report: React.FC = () => {
  const navigate = useNavigate();
  const username = "윤시윤"; // Replace with actual user data if available
  const nums = 3; // Replace with actual number of insurances if available
  const imgsrcs = [hanhwa, metlife, samsung];
  const titles = ["한화생명 보험", "메트라이프 보험", "삼성생명 보험"];
  const prices = ["27,500", "10,000", "32,000"];
  const types = ['암', '뇌', '심장','실손','치아','사망','장애','간병','치매']

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"baseline",
        gap: 10
      }}>
      <h2 style={{fontSize:40}}>{username}님 보험</h2>
      <h2 style={{color: "#2563EB", fontSize:45}}>종합 분석</h2>
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
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap:0,
          fontSize:18}}>
          <p style={{margin:0, fontWeight:"bold"}}>또래 월 평균 보험료보다</p>
          <div style={{
            display:"flex",
            flexDirection:"row",
            gap:5,
            margin:0
          }}>

            <h4 style={{
              fontSize:20,
              color: "#DB2777",
              margin:0
            }}>00,000원</h4>
            <p style={{
              display:"flex",
              alignSelf:"flex-end",
              margin:0, fontWeight:"bold"}}>더 내고 있어요</p>
          </div>
          <p>그래프</p>
        </div>
      </ReportCard>
      </div>
      <ReportCard title="요약" width="980px" height="fit-content"> 
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignSelf: "center",
          width: "65%",
          height: "65%",
          gap: "40px"
        }}>
          {/* <div style={{
            display:"flex",
            flexDirection:"column"
          }}> */}
            {/* <button onClick={() => navigate("/subreport")} 
            style={{ 
              backgroundColor:"transparent",
              border: "none",
              outline: "none",
              fontWeight: "normal",
              padding:0

            }}> */}
              <SummaryGraph type="암"></SummaryGraph>
            {/* <SummaryGraph type="실손"></SummaryGraph>
            <SummaryGraph type="장애"></SummaryGraph> */}
          </div>
          {/* <div style={{
            display:"flex",
            flexDirection:"column"
          }}>
            <SummaryGraph type="뇌"></SummaryGraph>
            <SummaryGraph type="치아"></SummaryGraph>
            <SummaryGraph type="간병"></SummaryGraph>
          </div>
          <div style={{
            display:"flex",
            flexDirection:"column"
          }}>
            <SummaryGraph type="심장"></SummaryGraph>
            <SummaryGraph type="사망"></SummaryGraph>
            <SummaryGraph type="치매"></SummaryGraph>
          </div> */}
        {/* </div> */}
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
