import React, { useState } from "react";
import "./quote-step-2.css";

import Input from "../../../../components/input/input.jsx";
import Button from "../../../../components/button/button.jsx";
import { ReactComponent as Calendar } from "../../../../icons/Calendar.svg";
import { ReactComponent as Map } from "../../../../icons/Map.svg";

export const QuoteStep2 = ({ currentStep, stepFollower }) => {
  return (
    <div className="step2_cont">
      <div className="block_a">
        <div className="title">Datos de la operación</div>
        <div className="step">Paso: {currentStep}</div>
      </div>
      <div className="block_b">
        <div className="calendar_cont">
          <Calendar />
          <p>info inputed</p>
        </div>
        <div className="map_cont">
          <Map />
          <p>info inputed</p>
        </div>
      </div>
      <hr />
      <div className="buttons_container">
        <div
          className="left_button"
          onClick={() => stepFollower(currentStep - 1)}
        >
          <Button text="Volver" />
        </div>
        <div
          className="right_button"
          onClick={() => stepFollower(currentStep + 1)}
        >
          <Button text="Siguente" />
        </div>
      </div>
    </div>
  );
};

export default QuoteStep2;
