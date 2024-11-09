import React from "react";
import "./quality-card.css";

const Qcard = ({ title, video, detail1, detail2, detail3, detail4 }) => (
  <div className="Qcard-cont">
    <div className="title-card">{title}</div>
    <video src={video} autoPlay="True" loop="True" />
    <ul className="details-cont">
      <li>{detail1}</li>
      <li>{detail2}</li>
      <li>{detail3}</li>
      <li>{detail4}</li>
    </ul>
  </div>
);

export default Qcard;
