import "./button.css";
import React from "react";

const Button = ({ text, shadowSide = true, setScroll = true }) => {
  const scrollToTop = () => {
    if (setScroll) {
      window.scrollTo({
        top: 0,
      });
    } else {
      const element = document.getElementById("#footer");
      element.scrollTo({
        top: element.scrollHeight,
        behavior: "smooth",
      });
    }
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
