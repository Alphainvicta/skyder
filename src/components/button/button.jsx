import "./button.css";
import React from "react";

const Button = ({ text }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="button-cont">
      <button onClick={scrollToTop}>{text}</button>
    </div>
  );
};

export default Button;
