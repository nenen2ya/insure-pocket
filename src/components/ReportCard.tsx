import React from "react";

interface ReportCardProps {
  title: string;              // 파란색 제목 텍스트
  width?: string;             // 카드 너비
  height?: string;            // 카드 전체 높이
  barheight?:string;          // 타이틀 바 높이
  children?: React.ReactNode; // 내부 컨텐츠
}

const ReportCard: React.FC<ReportCardProps> = ({
  title,
  width = "480px",
  height = "400px",
  barheight = "60px",
  children,
}) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 30,
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 상단 파란색 타이틀 바 */}
      <div
        style={{
          backgroundColor: "#2563EB",
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
          padding: "12px 20px",
          height: barheight,                // 타이틀바 높이 고정
          display: "flex",
          alignItems: "center",
        }}
      >
        {title}
      </div>

      {/* 내용 영역 */}
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
