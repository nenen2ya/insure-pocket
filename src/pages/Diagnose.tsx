import React, { useState } from "react";
import Button from "../components/Button";
import insurance from "../assets/img/insurance.png";
import { useNavigate } from "react-router-dom";
import Option from "../components/Option";
import InsuranceCard from "../components/InsuranceCard";

import { dummyReportData } from "../data/dummy_users_products";

const Diagnose: React.FC = () => {
    const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0=intro, 0.5=불러오기 완료 안내, 1~4=질문 단계, 5=완료'

  const data = dummyReportData;

  // 질문 리스트
  const questions = [
    {
      category: "음주",
      question: "최근 한 달 동안 주에 음주량이 어떻게 되나요?",
      options: ["주 1병 미만", "주 1-3병", "주 4병 이상"],
    },
    {
      category: "흡연",
      question: "흡연",
      options: ["비흡연자", "하루 10개비 이하", "하루 10개비 초과"],
    },
    {
      category: "운전",
      question: "운전",
      options: ["매주 3시간 미만", "매주 3시간 이상"],
    },
    {
      category: "직업",
      question: "직업군",
      options: [
          "전문가 및 관련 종사자",
          "사무 종사자 및 관리자",
          "서비스 종사자",
          "판매 종사자",
          "농림어업 숙련 종사자",
          "기능원 및 관련 기능 종사자",
          "장치·기계 조작 및 조립 종사자",
          "단순 노무 종사자",
          "군인"
        ]
      }
  ];

  // 질문 선택 시 다음 단계로 이동
  const handleSelect = () => {
    if (step < questions.length) {
      setStep((prev) => prev + 1);
    } else {
      setStep(5);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        gap: 32,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}    >
      {/* 초기 화면 */}
      {step === 0 && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                lineHeight: 1,
              }}
            >
              <p style={{ fontSize: 48, fontWeight: "bold", fontStyle: "normal", margin: 0}}>
                {data.user_name}님
              </p>
              <p style={{ fontSize: 40, fontWeight: "bold", marginBottom: 0 }}>
                의
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                lineHeight: 1,
              }}
            >
              <p
                style={{
                  fontSize: 48,
                  fontWeight: "bold",
                  color: "#2563EB",
                  margin: 0,
                }}
              >
                가입된 보험정보
              </p>
              <p style={{ fontSize: 40, fontWeight: "bold", margin: 0 }}>
                를 불러올까요?
              </p>
            </div>
            <img 
            src={insurance} 
            style={{ 
              width: 360, 
              height: 186, 
              marginTop: 30,
              alignSelf: "center"
            }} 
            alt="보험 이미지" 
            />
          </div>

          <Button text="불러오기" onClick={() => setStep(0.5)} />
        </>
      )}

      {/*불러오기 완료*/}
      {step === 0.5 && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                lineHeight: 1,
              }}
            >
              <p style={{ fontSize: 48, fontWeight: "bold", fontStyle: "normal", margin: 0}}>
                {data.user_name}님
              </p>
              <p style={{ fontSize: 40, fontWeight: "bold", marginBottom: 0 }}>
                의
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                lineHeight: 1,
              }}
            >
              <p
                style={{
                  fontSize: 48,
                  fontWeight: "bold",
                  color: "#2563EB",
                  margin: 0,
                }}
              >
                가입된 보험 {data.user_products.length}개
              </p>
              <p style={{ fontSize: 40, fontWeight: "bold", margin: 0 }}>
                를 불러왔어요!
              </p>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              gap: 5
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
          </div>
          <Button text="추가 진단하기" onClick={() => setStep(1)} />
        </>
      )}


        {/* 질문 단계 */}
      {step > 0.5 && step <= questions.length && (
        <>
            <div style={{ width: "75%", marginBottom: 20 }}>

        {/* 진행 바 */}
      <div style={{ textAlign: "left", fontSize: 15, marginBottom: 4 }}>
        {step}/{questions.length}
      </div>


      <div
        style={{
          width: "100%",
          height: 8,
          backgroundColor: "#EFF6FF",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${(step / questions.length) * 100}%`,
            height: "100%",
            backgroundColor: "#2563EB",
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>

          { /* 질문*/}
          <div style={{ width: 900, display:"flex", flexDirection:"column", alignItems:"flex-start", padding:20, gap:20 }}>
            <div style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20
            }}>
            <h3 
            style = {{
              borderRadius: "100%",
              backgroundColor: "#2563EB",
              width: 45,
              height: 45,
              padding: 10,
              fontSize:30,
              color: "white",
              textAlign:"center"
            }}>
              Q{step}
            </h3>
            {/* 카테고리+질문 */}
            <div style={{
              display:"flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0
            }}>
            <p style={{fontSize: 20, color: "#2563EB", margin: 0}}>
              {questions[step -1].category}
            </p>
            <p style = {{
              fontSize: 30, fontWeight: "bold", marginTop: 5, marginBottom: 0
            }}>
              {questions[step - 1].question}</p>
            </div>
            </div>
            {/* 선택 옵션 */}
            {questions[step - 1].options.map((option, idx) => (
              <Option
                key={idx}
                text={option}
                onClick={handleSelect}
              />
            ))}
          </div>
        </>
      )}

      {/* 완료 화면 */}
      {step === 5 && (
        <div>
          <h2 style= {{fontSize:35}}>진단이 완료되었습니다</h2>
          <p>결과를 기반으로 맞춤 보험 상품을 추천해드릴게요.</p>
          <Button text="결과 보기" onClick={() => navigate("/report")} />
          </div>
      )}
    </div>
  );
};

export default Diagnose;
