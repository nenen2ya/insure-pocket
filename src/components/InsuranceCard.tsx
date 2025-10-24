import React from "react";

interface InsuranceCardProps {
  imgSrc?: string; // 이미지 경로
  title: string;  // 상품명
  price: string;  // 가격 (예: "월 27,500원")
  width?: string; // 카드 너비
  height?: string; // 카드 높이
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({ imgSrc, title, price }) => {
  return (
    <div
      style={{
        width: 400,
        height: 84,
        border: "3px solid #BFDBFE",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 28px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", flexDirection:"column", alignItems: "flex-start",margin:0}}>
        {imgSrc && (
          <img
            src={imgSrc}
            alt="보험사"
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
        )}
        <p style={{ fontSize: "15px", margin: 0, }}>{title}</p>
      </div>
      <div style={{ display: "flex", flexDirection:"row", justifyContent:"center", alignItems: "center", gap: "4px" }}>
        <p style={{fontSize:15}}>월</p>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#1E3A8A",
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {price}
      </p>
      <p style={{fontSize:15}}>원</p>
      </div>
    </div>
  );
};

export default InsuranceCard;