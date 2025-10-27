import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { axiosClient } from "../lib/axiosClient";

const Login: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();


const handleLogin = async () => {
  try {
    const res = await axiosClient.post("/auth/login", {
      nickname,
      password,
    });

    const data = res.data;

    alert(`${data.nickname}님 환영합니다!`);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("user_id", data.id.toString());
    setUser(data);
    navigate(`/home/${data.id}`);

  } catch (error: any) {
    console.error("로그인 실패:", error);

    const errMsg =
      error.response?.data?.detail ||
      error.message ||
      "서버와 연결에 실패했습니다.";

    alert(errMsg);
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
          borderRadius: "20px",
          width: "400px",
          padding: "40px 36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#2563EB",
            marginBottom: "10px",
          }}
        >
          Insure Pocket
        </h2>
        <p style={{ color: "#6B7280", marginTop: "-8px" }}>
          내 보험, 한눈에 확인하세요
        </p>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              fontSize: "15px",
              outline: "none",
              transition: "border 0.2s ease",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #2563EB")}
            onBlur={(e) => (e.target.style.border = "1px solid #E5E7EB")}
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              fontSize: "15px",
              outline: "none",
              transition: "border 0.2s ease",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #2563EB")}
            onBlur={(e) => (e.target.style.border = "1px solid #E5E7EB")}
          />
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              backgroundColor: "#2563EB",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              border: "none",
              borderRadius: "10px",
              padding: "12px 0",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1E40AF")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
          >
            로그인
          </button>
        </div>
        <div
          style={{
            marginTop: "10px",
            fontSize: "14px",
            color: "#6B7280",
          }}
        >
          아직 계정이 없으신가요?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{
              color: "#2563EB",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            회원가입
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
