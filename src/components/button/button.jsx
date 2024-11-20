import "./button.css";
import React from "react";

const Button = ({ text, shadowSide = true }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="button_cont">
      <button
        onClick={scrollToTop}
        className={`${shadowSide ? "right" : "left"}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
