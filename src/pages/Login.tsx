import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>로그인하기</h2>
      <Button text="로그인" onClick={() => navigate("/")} />
        <p>계정이 없나요?</p>
        <Button text="회원가입" onClick={() => navigate("/signup")} />
    </div>
  );
};

export default Login;
