import "./button.css";
import React from "react";

const Button = ({
  text,
  shadowSide = true,
  setScroll = true,
  footerRef = null,
}) => {
  const scrollToTop = () => {
    if (setScroll) {
      window.scrollTo({
        top: 0,
      });
    } else {
      if (footerRef != null) {
        footerRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
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
