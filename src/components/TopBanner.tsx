import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useUser } from "../context/UserContext";


const TopBanner: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    alert("로그아웃 되었습니다 👋");
    navigate("/home");
  };

  const bannerStyle: React.CSSProperties = {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  return (
    <header style={bannerStyle}>
      <Link to="/home" style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ color: "#1E3A8A", fontWeight: 700, whiteSpace: "nowrap" }}>
          인슈어포켓
        </h2>
        <img src={logo} alt="로고" style={{ width: "80px" }} />
      </Link>

      <nav style={{ display: "flex", gap: "100px", alignItems: "center", fontSize:20 }}>
        <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
          보험료비교
        </Link>
        <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
          전문가 찾기
        </Link>
        <Link to="/diagnose" style={{ color: "#DB2777", fontWeight: 600 }}>
          진단하기
        </Link>
        <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
          보상!키움!
        </Link>
        <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
          인재채용
        </Link>
      </nav>

      {user ? (
        <div style={{ display: "flex", gap: "12px" }}>
          <Link
            to={`/mypage/${user.id}`}
            style={{
              color: "#2563EB",
              stroke:"#2563EB",
              strokeWidth:2,
              padding: "12px 20px",
              borderRadius: "30px",
            }}
          >
            마이페이지
          </Link>
          <button
            onClick={handleLogout}
            style={{
              color: "#E11D48",
              padding: "12px 20px",
              borderRadius: "30px",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
            }}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          style={{
            backgroundColor: "#2563EB",
            color: "white",
            padding: "12px 20px",
            borderRadius: "30px",
            fontSize: "18px",
          }}
        >
          로그인
        </Link>
      )}
    </header>
  );
};

export default TopBanner;
