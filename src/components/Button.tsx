import React from "react";

interface ButtonProps {
  text: string;
  color?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, backgroundColor, width, height, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: backgroundColor || "#2563EB",
        color: color || "white",
        border: "none",
        borderRadius: "20px",
        fontSize: "20px",
        fontWeight:"700",
        cursor: "pointer",
        margin: "10px",
        width: width || 230,
        height: height || 74,
        outline:"none"
      }}
    >
      {text}
    </button>
  );
};

export default Button;
