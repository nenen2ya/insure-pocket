import React, { useState } from "react";
import Button from "../components/Button";
import insurance from "../assets/img/insurance.png";
import { useNavigate } from "react-router-dom";
import Option from "../components/Option";

const Diagnose: React.FC = () => {
    const navigate = useNavigate();
  const username = "KDA";
  const [step, setStep] = useState(0); // 0=intro, 1~4=질문 단계, 5=완료

  // 질문 리스트
  const questions = [
    {
      question: "음주 (1회 음주 시, 소주 1병 기준)",
      options: ["주 2회 미만", "주2회 이상"],
    },
    {
      question: "흡연",
      options: ["비흡연자", "하루 10개비 이하", "하루 10개비 초과"],
    },
    {
      question: "운전",
      options: ["매주 3시간 미만", "매주 3시간 이상"],
    },
    {
      question: "직업군",
      options: ["저위험군", "고위험군"],
    },
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
              <p style={{ fontSize: 48, fontWeight: "bold", margin: 0 }}>
                {username}님
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
            <img src={insurance} style={{ marginTop: 30 }} alt="보험 이미지" />
          </div>

          <Button text="불러오기" onClick={() => setStep(1)} />
        </>
      )}

        {/* 질문 단계 */}
      {step > 0 && step <= questions.length && (
        <>
            <div style={{ width: "100%", marginBottom: 32 }}>

        {/* 진행 바 */}
      <div style={{ textAlign: "left", fontSize: 14, marginBottom: 4 }}>
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
            <h3>
              Q{step}
            </h3>
            <p>{questions[step - 1].question}</p>
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

      {step === 5 && (
        <div>
          <h2>진단이 완료되었습니다</h2>
          <p>결과를 기반으로 맞춤 보험 상품을 추천해드릴게요.</p>
          <Button text="결과 보기" onClick={() => navigate("/report")} />
          </div>
      )}
    </div>
  );
};

export default Diagnose;
