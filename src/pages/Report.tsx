import React from "react";
// import { Link } from "react-router-dom";
import InsuranceCard from "../components/InsuranceCard";
import ReportCard from "../components/ReportCard";
import SummaryGraph from "../components/SummaryGraph";
import {useNavigate} from "react-router-dom";

import { dummyReportData } from "../data/dummy_users_products";

const Report: React.FC = () => {
  const navigate = useNavigate();
  const data = dummyReportData;
  const types = ['암', '뇌', '심장','실손','치아','사망','장애','간병','치매'];

  return (
    // 내 보험 목록
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"baseline",
        gap: 10
      }}>
      <h2 style={{fontSize:40}}>{data.user_name}님 보험</h2>
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
      <ReportCard title={`내 보험 ${data.user_products.length}개`}>
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:10
        }}>
          {data.user_products.map((product) => (
                <InsuranceCard
                  key={product.id}
                  imgSrc={product.company_img}
                  title={product.product_name}
                  price={product.monthly_premium.toLocaleString()} // 천단위 콤마
                  width="400px"
                  height="84px"
                />
              ))}
        </div>
      </ReportCard>

      <ReportCard title="월 보험료">
        {/* 월 보험료 비교 멘트 */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          fontSize:18,
          }}
        >
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
        </div>

        {/* 월 보험료 비교 그래프 */}
        <div
          style={{
            position: "relative",
            // border: "2px solid black",
            boxSizing: "border-box",
            padding: "20px 0",
            overflow: "hidden",
          }}
        >
          {/* 그래프 캔버스 */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 180, 
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 40,
            }}
          >
            {/* 바닥선 (x축) */}
            <div
              style={{
                position: "absolute",
                bottom: 43,
                left: "50%",
                transform: "translateX(-50%)",
                width: "65%",
                height: 5,
                backgroundColor: "#EFF6FF",
                borderRadius: 4,
                zIndex: 0,
              }}
            />

            {/* 내 보험료 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                zIndex: 1,
              }}
            >
              {/* 막대 */}
              <div
                style={{
                  width: 90,
                  height: 145,
                  background: "#DB2777",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}
              />
              {/* 라벨 */}
              <div
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginTop: 12,
                }}
              >
                <span style={{ fontWeight: 400 }}>{data.user_name}님</span>
                <br />
                <span>00,000원</span>
              </div>
            </div>

            {/* 또래 보험료 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                zIndex: 1,
              }}
            >
              {/* 막대 */}
              <div
                style={{
                  width: 90,
                  height: 120,
                  background: "#BFDBFE",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}
              />
              {/* 라벨 */}
              <div
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginTop: 12,
                }}
              >
                <span style={{ fontWeight: 400 }}>20대 평균</span>
                <br />
                <span>00,000원</span>
              </div>
            </div>
          </div>
        </div>
      </ReportCard>
    </div>




      <ReportCard title="요약" width="980px" height="fit-content"> 
        <div style={{
          display:"grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px"
        }}>
          {types.map((type,i)=>(
            <SummaryGraph
            key = {i}
            type={type}/>
          ))
          }   
          </div>
      </ReportCard>
      <ReportCard title="종합 코멘트" width= "980px" height="200px">
        <p style={{
          display:"flex",
          justifyContent:"flex-start"
        }}>{data.user_name}님의 가입 상품은 뭐고, 이래서 그래요</p>
      </ReportCard>
    </div>
  </div>
  );
};

export default Report;
