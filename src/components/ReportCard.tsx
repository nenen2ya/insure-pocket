import React from "react";

interface ReportCardProps {
  title: string;
  width?: string;
  height?: string;
  barheight?:string;
  children?: React.ReactNode;
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
      <div
        style={{
          backgroundColor: "#2563EB",
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
          padding: "12px 20px",
          height: barheight,
          display: "flex",
          alignItems: "center",
        }}
      >
        {title}
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
