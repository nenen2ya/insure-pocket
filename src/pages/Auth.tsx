import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Auth: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>본인인증 화면</h2>
      <p>(아직 기능 없음)</p>
      <Button text="본인인증하기" onClick={() => navigate("/report")} />
    </div>
  );
};

export default Auth;
