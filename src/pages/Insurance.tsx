import React from "react";
import { useLocation } from "react-router-dom";

const Insurance: React.FC = () => {
  const location = useLocation();
  const type = location.state?.type; // "과잉" or "부족"

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{type} 관련 보험 상품</h2>
      <ul>
        <li>보험 상품 1</li>
        <li>보험 상품 2</li>
        <li>보험 상품 3</li>
      </ul>
    </div>
  );
};

export default Insurance;
