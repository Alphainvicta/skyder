import React from "react";
import "./description-block.css";

const Dblock = ({ title, details }) => (
  <div className="description_cont">
    <div className="description_text">
      <div className="title">{title}</div>
      <div className="details">{details}</div>
    </div>
    <hr />
  </div>
);

export default Dblock;
