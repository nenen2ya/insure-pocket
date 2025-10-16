import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid #2563EB",
        borderRadius: "30px",
        fontSize: "20px",
        fontWeight:"700",
        cursor: "pointer",
        margin: "10px",
        width: "100%",
        height: 100,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
