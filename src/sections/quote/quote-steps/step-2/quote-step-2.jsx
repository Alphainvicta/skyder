import React from "react";
import "./quote-step-2.css";

import Button from "../../../../components/button/button.jsx";
import GMap from "./gMap/gMap.jsx";
import GCalendar from "./gCalendar/gCalendar.jsx";

export const QuoteStep2 = ({
  currentStep,
  stepFollower,
  formData,
  handleInputChange,
}) => {
  return (
    <div className="step2_cont">
      <div className="block_a">
        <div className="title">Datos de la operación</div>
        <div className="step">Paso: {currentStep}</div>
      </div>
      <div className="block_b">
        <div className="calendar_cont">
          <GCalendar handleInputChange={handleInputChange} />
        </div>
        <div className="map_cont">
          <GMap handleInputChange={handleInputChange} />
        </div>
      </div>
      <hr />
      <div className="buttons_container">
        <div
          className="left_button"
          onClick={() => stepFollower(currentStep - 1)}
        >
          <Button text="Volver" shadowSide={false} />
        </div>
        <div
          className={`right_button ${
            formData.date && formData.location ? "" : "disable"
          }`}
          onClick={() => stepFollower(currentStep + 1)}
        >
          <Button text="Siguente" />
        </div>
      </div>
    </div>
  );
};

export default QuoteStep2;
