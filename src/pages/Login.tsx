import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Login: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser(); // ✅ 전역 상태 업데이트 함수 사용

  const handleLogin = async () => {
    try {
      const res = await fetch("https://insure-pocket-back-1.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.detail || "로그인 실패");
        return;
      }

      // ✅ 로그인 성공 처리
      alert(`${data.nickname}님 환영합니다!`);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("user_id", data.id.toString());
      setUser(data); // Context에 유저 저장
      navigate(`/home/${data.id}`);
    } catch (error) {
      alert("서버와 연결에 실패했습니다.");
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <h2>로그인</h2>
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
