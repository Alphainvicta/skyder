import React from "react";
import "./quality-card.css";
import Input from "../input/input";
import { ReactComponent as List } from "../../icons/checkmark.svg";

const Qcard = ({
  radio,
  title,
  video,
  detail1,
  detail2,
  detail3,
  detail4,
  onRadioChange,
  checked,
}) => {
  return (
    <div className="Qcard_cont">
      <div className="card_cont">
        <div className="title_card">{title}</div>
        <video src={video} autoPlay="True" loop="True" />
        <div className="details_cont">
          <li>
            <List />
            {detail1}
          </li>
          <li>
            <List />
            {detail2}
          </li>
          <li>
            <List />
            {detail3}
          </li>
          <li>
            <List />
            {detail4}
          </li>
        </div>
      </div>

      <Input
        id={radio}
        name="cards_radio"
        value={radio}
        type="radio"
        label="Escoger paquete"
        onChange={() => onRadioChange(radio)}
        checked={checked}
      />
    </div>
  );
};

export default Qcard;
