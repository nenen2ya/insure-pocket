import React, { useState } from "react";
import vector from "../assets/img/vector.png";
import Button from "../components/Button";
import { axiosClient } from "../lib/axiosClient";
import { useNavigate } from "react-router-dom";


function MyToggle({ rotated = false }: { rotated?: boolean }) {
  return (
    <img
      src={vector}
      alt="vector"
      style={{
        transform: rotated ? "rotate(-90deg)" : "rotate(90deg)",
        width: "100%",
        height: "100%",
        objectFit: "contain",
        transition: "transform 0.2s ease",
      }}
    />
  );
}

interface RecommendCardProps {
  imgSrc: string;
  title: string;
  cancerKeywords: string[];
  href: string;
  contents: { keyword: string; summary: string }[];
  width?: string;
  height?: string;
  selected: boolean;
  userId?: number;
  productId?: number;
  apiUrl?: string;
}

const navigate = useNavigate();

const RecommendCard: React.FC<RecommendCardProps> = ({
  imgSrc,
  title,
  cancerKeywords,
  href,
  width = "900px",
  contents,
  selected,
  userId,
  productId,
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => setOpen(!open);

const handleAddToPocket = async () => {
  if (!userId || !productId) {
    alert("사용자 정보가 누락되었습니다.");
    return;
  }

  const moveToPocket = window.confirm("인마이포켓으로 이동할까요?");
  try {
    setIsLoading(true);
    const res = await axiosClient.post(`/pockets/${userId}/${productId}`);
    alert(res.data?.message || "포켓에 담았습니다!");

    if (moveToPocket) {
      navigate("/inmypocket");
    }
  } catch (error: any) {
    console.error("서버 요청 중 예외 발생:", error);
    alert(error.response?.data?.detail || "서버 요청 중 오류가 발생했습니다.");
  } finally {
    setIsLoading(false);
  }
};


const handleRemoveFromPocket = async () => {
  if (!userId || !productId) {
    alert("사용자 정보가 누락되었습니다.");
    return;
  }

  const confirmRemove = window.confirm("해당 상품을 인마이포켓에서 뺄까요?");
  if (!confirmRemove) return;

  try {
    setIsLoading(true);
    const res = await axiosClient.delete(`/pockets/${userId}/${productId}`);
    alert(res.data?.message || "포켓에서 삭제되었습니다!");
    navigate("/inmypocket");
  } catch (error: any) {
    console.error("서버 요청 중 예외 발생:", error);

    const errMsg =
      error.response?.data?.detail ||
      error.message ||
      "서버 요청 중 오류가 발생했습니다.";

    alert(errMsg);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div
      style={{
        width,
        minHeight: 84,
        border: "3px solid #BFDBFE",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "10px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <ul
            style={{
              gap: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {cancerKeywords.map((cancerKeyword, i) => (
              <li
                key={i}
                style={{
                  width: "70px",
                  height: "25px",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 30,
                  outline: "1px #DBEAFE solid",
                  outlineOffset: "-1px",
                  color: "black",
                  fontSize: 12,
                  fontWeight: "400",
                  whiteSpace: "nowrap",
                }}
              >
                {cancerKeyword}
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img src={imgSrc} alt={title} style={{ width: "20%" }} />
            <p style={{ fontSize: "20px", fontWeight: "500", margin: 0 }}>{title}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggle}
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "transparent",
            gap: 5,
            height: "30px",
            width: "fit-content",
            margin: 0,
            padding: 0,
            outline: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <p style={{ fontSize: 20, color: "#2563EB", margin: 0 }}>
            {open ? "닫기" : "더보기"}
          </p>
          <div style={{ width: 18, height: 18 }}>
            <MyToggle rotated={open} />
          </div>
        </button>
      </div>

<div 
  style={{ 
    width: "100%", 
    maxHeight: open ? "500px" : "0px", 
    overflow: "hidden", 
    display: "flex", 
    flexDirection: "column", 
    gap: "20px", 
    transition: "all 0.4s ease", 
    opacity: open ? 1 : 0, 
  }} 
> 
  <div style={{ 
    display: "flex", 
    flexDirection: "column", 
    gap: "16px", 
    margin: "20px 10px", 
    alignItems: "flex-start", 
    textAlign: "left",
  }}> 
    {contents && 
      contents.map((content, i) => ( 
        <div 
          key={i} 
          style={{
            gap: 0,
            padding: "16px 20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            width: "100%",
            boxSizing: "border-box",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f2f5";
            e.currentTarget.style.transform = "translateX(4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f8f9fa";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        > 
          <h2 style={{ 
            margin: 0,
            marginBottom: "8px",
            fontSize: "18px",
            fontWeight: "600",
            color: "#2c3e50",
            letterSpacing: "-0.3px",
          }}>
            {content.keyword}
          </h2> 
          <p style={{
            margin: 0,
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#5a6c7d",
            fontWeight: "400",
          }}>
            {content.summary}
          </p> 
        </div> 
      ))} 
  </div>


        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {selected === false ? (
            <Button
              onClick={handleAddToPocket}
              text={isLoading ? "처리 중..." : "포켓에 담기"}
              backgroundColor="#DB2777"
              width="200px"
              height="70px"
            />
          ) : (
            <Button
              onClick={handleRemoveFromPocket}
              text="포켓에서 빼기"
              backgroundColor="#DB2777"
              width="200px"
              height="70px"
            />
          )}

          <Button
            onClick={() => window.open(href, "_blank")}
            text="가입하기"
            backgroundColor="#1E3A8A"
            width="200px"
            height="70px"
          />
        </div>
      </div>
      </div>
  );
};

export default RecommendCard;
