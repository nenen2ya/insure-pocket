import React, { useState } from "react";
import vector from "../assets/img/vector.png";
import Button from "../components/Button";

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
  userId?: number; // ✅ 유저 아이디
  productId?: number; // ✅ 상품 아이디
  apiUrl?: string; // ✅ FastAPI 서버 주소 (예: "https://your-fastapi.onrender.com")
}

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
  apiUrl="https://insure-pocket-back-1.onrender.com/pockets"
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => setOpen(!open);

  // ✅ 포켓 담기 함수
  const handleAddToPocket = async () => {
    if (!userId || !productId) {
      alert("사용자 정보가 누락되었습니다.");
      return;
    }

    const confirmAdd = window.confirm("인마이포켓으로 이동할까요?");
    if (!confirmAdd) return;

    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}/${userId}/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

    if (!response.ok) {
        // HTTP 오류 상태인 경우
        const errorBody = await response.json().catch(() => null);
        console.error("Error response body:", errorBody);
        alert(errorBody?.detail || `오류 발생: ${response.status}`);
        return;
        }

        const result = await response.json();
        alert(result.message || "포켓에 담았습니다!");
        window.location.href = "/inmypocket";
    } catch (error) {
        console.error("서버 요청 중 예외 발생:", error);
        alert("서버 요청 중 오류가 발생했습니다.");
    } finally {
        setIsLoading(false);
    }
    };

    // ✅ 포켓 빼기 함수
    const handleRemoveFromPocket = async () => {
        console.log("🧩 handleRemoveFromPocket 실행됨!", userId, productId);

    if (!userId || !productId) {
        alert("사용자 정보가 누락되었습니다.");
        return;
    }

    const confirmRemove = window.confirm("해당 상품을 인마이포켓에서 뺄까요?");
    if (!confirmRemove) return;

    try {
        setIsLoading(true);

        const response = await fetch(`${apiUrl}/${userId}/${productId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        });

        if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        console.error("Error response body:", errorBody);
        alert(errorBody?.detail || `오류 발생: ${response.status}`);
        return;
        }

        const result = await response.json();
        alert(result.message || "포켓에서 삭제되었습니다!");
        window.location.reload(); // ✅ 새로고침으로 목록 갱신
    } catch (error) {
        console.error("서버 요청 중 예외 발생:", error);
        alert("서버 요청 중 오류가 발생했습니다.");
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
      {/* 상단 기본 정보 */}
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

      {/* 더보기 토글 영역 */}
      <div
        style={{
          width: "100%",
          maxHeight: open ? "300px" : "0px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          transition: "all 0.4s ease",
          opacity: open ? 1 : 0,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {contents &&
            contents.map((content, i) => (
              <div key={i}>
                <h2>{content.keyword}</h2>
                <h3>{content.summary}</h3>
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
