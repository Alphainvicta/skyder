import React, { useState } from "react";
import "./quote-step-1.css";

import Input from "../../../../components/input/input.jsx";
import Button from "../../../../components/button/button.jsx";
import Qcardlist from "../../../../components/quality-card/quality-card-list.jsx";

export const QuoteStep1 = ({
  currentStep,
  stepFollower,
  formData,
  handleInputChange,
}) => {
  const [valueSlider, setValueSlider] = useState(15);

  const handleSliderChange = (event) => {
    setValueSlider(event.target.value);
    handleInputChange("videoLenght", `${event.target.value} segundos`);
  };

  const progressWidth = ((valueSlider - 15) / (150 - 15)) * 100;

  const handleCustomTimeInput = (event) => {
    if (event.target.value)
      handleInputChange("videoLenght", event.target.value);
    else handleInputChange("videoLenght", `${valueSlider} segundos`);
  };

  const [selectedServices, setSelectedServices] = useState({
    servicio1: false,
    servicio2: false,
    servicio3: false,
    servicio4: false,
    servicio5: false,
    servicio6: false,
    servicio7: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // Update the state first
    setSelectedServices((prevState) => {
      const updatedServices = {
        ...prevState,
        [name]: checked,
      };

      // Calculate selected service names based on updated state
      const selectedServiceNames = Object.keys(updatedServices)
        .filter((service) => updatedServices[service])
        .map((service) => service.replace("servicio", "Servicio "))
        .join(" - ");

      // Call handleInputChange with the updated service names
      handleInputChange("serviceList", selectedServiceNames);

      return updatedServices;
    });
  };

  const selectionMessage =
    Object.keys(selectedServices)
      .filter((service) => selectedServices[service])
      .map((service) => service.replace("servicio", "Servicio "))
      .join(" - ") || "No hay servicios seleccionados";

  return (
    <div className="step1_cont">
      <div className="block_a">
        <div className="title">Elegir servicios</div>
        <div className="step">Paso: {currentStep}</div>
      </div>
      <div className="block_b">
        <Input
          id="servicio1"
          name="servicio1"
          type="checkbox"
          label="Servicio 1"
          checked={selectedServices.servicio1}
          onChange={handleCheckboxChange}
        />
        <Input
          id="servicio2"
          name="servicio2"
          type="checkbox"
          label="Servicio 2"
          checked={selectedServices.servicio2}
          onChange={handleCheckboxChange}
        />
        <Input
          id="servicio3"
          name="servicio3"
          type="checkbox"
          label="Servicio 3"
          checked={selectedServices.servicio3}
          onChange={handleCheckboxChange}
        />
        <Input
          id="servicio4"
          name="servicio4"
          type="checkbox"
          label="Servicio 4"
          checked={selectedServices.servicio4}
          onChange={handleCheckboxChange}
        />
        <Input
          id="servicio5"
          name="servicio5"
          type="checkbox"
          label="Servicio 5"
          checked={selectedServices.servicio5}
          onChange={handleCheckboxChange}
        />
        <Input
          id="servicio6"
          name="servicio6"
          type="checkbox"
          label="Servicio 6"
          checked={selectedServices.servicio6}
          onChange={handleCheckboxChange}
        />
        <Input
          id="servicio7"
          name="servicio7"
          type="checkbox"
          label="Servicio 7"
          checked={selectedServices.servicio7}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="block_c">
        <div className="title">Seleccionados</div>
        <div className="selection">{selectionMessage}</div>
      </div>
      <hr />
      {selectedServices.servicio4 ? (
        <div className="service_quality">
          <div className="title">Calidad de salida</div>
          <div className="block_a2">
            <Qcardlist handleInputChange={handleInputChange} />
          </div>
          <div className="block_b2">
            <p>15 segundos</p>
            <div className="slider_cont">
              <span />
              <input
                type="range"
                id="slider"
                min="15"
                max="150"
                step="1"
                value={valueSlider}
                onChange={handleSliderChange}
              />
              <div
                className="slider_progress"
                style={{ width: `${progressWidth}%` }}
              />
            </div>

            <p>{valueSlider} segundos</p>
          </div>
          <div className="custom_time">
            <Input
              id="otroTiempoText"
              name="otroTiempoText"
              type="text"
              value="Otro tiempo"
              label="Otro tiempo"
              onChange={handleCustomTimeInput}
            />
          </div>

          <hr />
          <div
            className={`button_container ${
              formData.qualityOutput ? "" : "disable"
            }`}
            onClick={() => stepFollower(currentStep + 1)}
          >
            <Button text="Siguente" />
          </div>
        </div>
      ) : (
        <div
          className={`button_container ${
            formData.serviceList ? "" : "disable"
          }`}
          onClick={() => stepFollower(currentStep + 1)}
        >
          <Button text="Siguente" />
        </div>
      )}
    </div>
  );
};

export default QuoteStep1;
