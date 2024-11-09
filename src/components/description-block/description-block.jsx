import React from "react";
import "./description-block.css";

const Dblock = ({ title, details }) => (
  <div className="description-cont">
    <div className="title">{title}</div>
    <div className="details">{details}</div>
  </div>
);

export default Dblock;
