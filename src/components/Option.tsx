import React, { useState } from "react";
import info from "../assets/img/info.png"

interface ButtonProps {
  text: string;
  onClick?: () => void;
  showTooltip?: boolean;
}

const getTooltipText = (label: string) => {
  const tooltips: Record<string, string> = {
    "전문가 및 관련 종사자":
      "과학, 정보통신, 공학, 보건·사회복지·종교, 교육, 법률·행정, 경영·금융, 전문직이 속합니다.",
    "사무 종사자 및 관리자":
      "일반 사무·회계·인사·총무 등 백오피스 중심의 사무 직무를 포괄합니다.",
    "서비스 종사자": "경찰·소방·보안, 이미용·예식·의료보조, 운송·여가, 조리·음식 서비스 등이 포함됩니다.",
    "판매 종사자": "소매·도소매 판매, 매장관리, 고객 응대 등 판매 관련 직무가 해당됩니다.",
    "농림어업 숙련 종사자": "농업, 임업, 어업 등 1차 산업에 종사하는 직군입니다.",
    "기능원 및 관련 기능 종사자": "식품가공, 섬유·의복·가죽, 목재·가구·악기, 금속성형, 운송·기계, 전기·전자, 건설·채굴, 영상·통신 장비 등 숙련 기능직입니다.",
    "장치·기계 조작 및 조립 종사자": "발전·배전, 화학·금속·비금속, 기계제조, 전기·전자, 운전·운송, 상·하수도·재활용, 목재·인쇄 등 장치 조작과 조립 직무입니다.",
    "단순 노무 종사자": "제조 관련 단순노무, 청소·경비, 가사·음식·판매 보조, 농림어업 등 단순 업무 중심 직무입니다.",
    "군인": "현역 군인 등 군사 직무 전반을 별도 그룹으로 분류합니다.",
  };
  return tooltips[label] || "";
};

const Option: React.FC<ButtonProps> = ({ text, onClick, showTooltip }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: "100%",
      }}
    >
      <button
        onClick={onClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "white",
          color: "black",
          border: "1px solid #2563EB",
          borderRadius: "30px",
          fontSize: "20px",
          fontWeight: "700",
          cursor: "pointer",
          margin: "10px 0",
          width: "100%",
          height: 100,
          textAlign: "center",
        }}
      >
        {text}
      </button>

      {showTooltip && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "absolute",
            top: 20,
            right: 30,
            cursor: "pointer",
          }}
        >
          <img
            src={info}
            alt="?"
            style={{
              width: 22,
              height: 22,
            }}
          />

          {hovered && (
            <div
              style={{
                position: "absolute",
                top: "-5px",
                left: "130%",
                width: 280,
                backgroundColor: "rgba(0,0,0,0.85)",
                color: "white",
                borderRadius: 10,
                padding: "8px 12px",
                fontSize: 14,
                lineHeight: 1.4,
                zIndex: 10,
              }}
            >
              {getTooltipText(text)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Option;
