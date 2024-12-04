import React, { useState, useEffect } from "react";
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
  const [selectedServices, setSelectedServices] = useState(
    formData.serviceList
  );
  const [valueSlider, setValueSlider] = useState(
    parseInt(formData.videoLenght)
  );
  const [valueInput, setValueInput] = useState(formData.videoLengthInput);

  const progressWidth = ((valueSlider - 15) / (150 - 15)) * 100;

  const handleInputChangeForService = (event) => {
    const { name, checked } = event.target;

    setSelectedServices((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  useEffect(() => {
    const selectedServiceNames = Object.keys(selectedServices)
      .filter((service) => selectedServices[service])
      .map((service) => service.replace("servicio", "Servicio "))
      .join(" - ");

    handleInputChange("finalServiceList", selectedServiceNames);
    handleInputChange("serviceList", selectedServices);
  }, [selectedServices, handleInputChange]);

  useEffect(() => {
    if (valueInput) {
      handleInputChange("videoLengthInput", valueInput);
    }
  }, [valueInput, handleInputChange]);

  useEffect(() => {
    if (String(valueSlider) !== String(formData.videoLenght)) {
      handleInputChange("videoLenght", valueSlider);
      handleInputChange("videoLengthInput", "");
      setValueInput("");
      if (document.getElementById("otroTiempoText"))
        document.getElementById("otroTiempoText").value = "";
    }
  }, [valueSlider, handleInputChange, formData.videoLenght]);

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
          onChange={handleInputChangeForService}
        />
        <Input
          id="servicio2"
          name="servicio2"
          type="checkbox"
          label="Servicio 2"
          checked={selectedServices.servicio2}
          onChange={handleInputChangeForService}
        />
        <Input
          id="servicio3"
          name="servicio3"
          type="checkbox"
          label="Servicio 3"
          checked={selectedServices.servicio3}
          onChange={handleInputChangeForService}
        />
        <Input
          id="servicio4"
          name="servicio4"
          type="checkbox"
          label="Servicio 4"
          checked={selectedServices.servicio4}
          onChange={handleInputChangeForService}
        />
        <Input
          id="servicio5"
          name="servicio5"
          type="checkbox"
          label="Servicio 5"
          checked={selectedServices.servicio5}
          onChange={handleInputChangeForService}
        />
        <Input
          id="servicio6"
          name="servicio6"
          type="checkbox"
          label="Servicio 6"
          checked={selectedServices.servicio6}
          onChange={handleInputChangeForService}
        />
        <Input
          id="servicio7"
          name="servicio7"
          type="checkbox"
          label="Servicio 7"
          checked={selectedServices.servicio7}
          onChange={handleInputChangeForService}
        />
      </div>
      <div className="block_c">
        <div className="title">Seleccionados</div>
        <div className="selection">
          {formData.finalServiceList || "No hay servicios seleccionados"}
        </div>
      </div>
      <hr />
      {selectedServices.servicio4 ? (
        <div className="service_quality">
          <div className="title">Calidad de salida</div>
          <div className="block_a2">
            <Qcardlist
              formData={formData}
              handleInputChange={handleInputChange}
            />
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
                onChange={(e) => setValueSlider(e.target.value)}
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
              defaultValue={valueInput}
              label="Otro tiempo"
              onChange={(e) => setValueInput(e.target.value)}
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
            formData.finalServiceList ? "" : "disable"
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
