import React from "react";

const Button = ({
  width = "auto",
  height = "40px",
  background = "black",
  color = "white",
  text,
  fontSize,
  border='none',
  onClick,
  className = "",
  style = {}
}) => {

  const defaultStyle = {
    width,
    height,
    background,
    color,
    border,
    fontSize,
    fontFamily: "'Fira Code', monospace",
    cursor: "pointer",
    padding: "0 16px"
  };

  return (
    <button
      onClick={onClick}
      className={className}
      style={{ ...defaultStyle, ...style }}
    >
      {text}
    </button>
  );
};

export default Button;