import React from "react";

type BoxProps = {
  text?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Box: React.FC<BoxProps> = ({ text, className, style }) => {
  return (
    <div
      className={className}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px",
        ...style,
      }}
    >
      {text}
    </div>
  );
};

export default Box;
