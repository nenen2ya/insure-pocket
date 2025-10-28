import React, {useState} from "react";
import info from "../assets/img/whiteinfo.png";

interface ReportCardProps {
  title: string;
  width?: string;
  height?: string;
  barheight?:string;
  showTooltip?: boolean;
  children?: React.ReactNode;
}

const getTooltipText = "사용자의 가입 보험 정보와 진단 내용을 기반으로 분석한 결과입니다."

const ReportCard: React.FC<ReportCardProps> = ({
  title,
  width = "480px",
  height = "400px",
  barheight = "60px",
  showTooltip = false,
  children,
}) => {

  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 30,
        overflow: "visible",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "#2563EB",
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
          padding: "10px 20px",
          height: barheight,
          lineHeight: barheight,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "visible",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <span>{title}</span>
    {showTooltip && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "absolute",
            top:12,
            right: 30,
            cursor: "pointer",
          }}
        >
          <img
            src={info}
            alt="?"
            style={{
              width: 24,
              height: 24,
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
                zIndex: 9999,
              }}
            >
              {getTooltipText}
              </div>
            )}
          </div>
        )}
      </div>
      

      <div
        style={{
          padding: 20,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ReportCard;
