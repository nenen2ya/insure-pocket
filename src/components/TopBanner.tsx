import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const TopBanner: React.FC = () => {
  const bannerStyle: React.CSSProperties = {
    width: "100%",
    height: "100px",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  };


  const linkStyle: React.CSSProperties = {
    color: "black",
    textDecoration: "none",
    fontWeight: 500,
    transition: "opacity 0.2s",
    fontSize: "24px",
  };

  return (
    <header style={bannerStyle}>
      <Link to="/" style={{ display: "inline-block" }}>
        <img src={logo} alt="로고" style={{ width: "120px" }} />
      </Link>
      
      <nav style={{
        display: "flex",
        alignItems: "center",
        gap: "120px",
      }}>
        <Link to="/" style={linkStyle}>
          보험료비교
        </Link>
        <Link to="/" style={linkStyle}>
          전문가 찾기
        </Link>
        <Link to="/diagnose" style={linkStyle}>
          진단하기
        </Link>
      </nav>
        <Link to="/login" style={linkStyle}>
          마이페이지
        </Link>
    </header>
  );
};

export default TopBanner;
