import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>회원가입하기</h2>
      <p>정보를 입력하세요</p>
        <Button text="회원가입 완료" onClick={() => navigate("/")} />
    </div>
  );
};

export default Signup;
