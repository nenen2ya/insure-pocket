import React from "react";

interface MyPageCardProps {
  imgSrc: string;
  title: string;
  price: string | number;
  width?: string;
  height?: string;
}

const MyPageCard: React.FC<MyPageCardProps> = ({ imgSrc, title, price }) => {
return (
    <div
    style={{
        width: 918,
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
    <div style={{ display: "flex", flexDirection:"column", alignItems: "flex-start",margin:"40px"}}>
        <img
        src={imgSrc}
        alt={title}
        style={{width:68}}
        />
        <p style={{fontSize:"15px", margin:0}}>{title}</p>
    </div>
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center",
        width:"220px",
        gap:"4px"
    }}>
        <p style={{fontSize:"20px", fontWeight:500}}>월 보험료 {price}원</p>
    </div>
    </div>
);
};

export default MyPageCard;