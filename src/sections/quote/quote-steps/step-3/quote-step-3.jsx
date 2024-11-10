import React, { useState } from "react";
import "./quote-step-3.css";

import Input from "../../../../components/input/input.jsx";
import Button from "../../../../components/button/button.jsx";

export const QuoteStep3 = ({ currentStep, stepFollower }) => {
  const [details, setDetails] = useState("");
  const maxLength = 500;

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  return (
    <div className="step3_cont">
      <div className="block_a">
        <div className="title">Datos de contacto</div>
        <div className="step">Paso: {currentStep}</div>
      </div>
      <div className="block_b">
        <div className="side_a">
          <Input
            id="nombre"
            name="nombre"
            type="text"
            label="Nombre"
            value="Nombre"
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            value="Email"
          />
          <div className="textarea_cont">
            <label>Detalles extras</label>
            <textarea
              id="detallesExtras"
              name="detallesExtras"
              placeholder="Detalles extras"
              value={details}
              onChange={handleDetailsChange}
              maxLength={maxLength}
            />
            <div className="char_count">
              <span>
                {maxLength - details.length == 0
                  ? "No quedan mas caracteres"
                  : maxLength - details.length == 1
                  ? `Caracter restante: ${maxLength - details.length}`
                  : `Caracteres restantes: ${maxLength - details.length}`}
              </span>
            </div>
          </div>
        </div>
        <div className="side_b">
          <div className="terms_cont">
            <div className="terms_title">Terminos y condiciones</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sint et culpa itaque. Saepe quia atque error nam vel
              quisquam reprehenderit. Aliquid a dolor delectus aliquam repellat
              provident veritatis ab. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Cum a, nisi asperiores blanditiis molestiae
              doloremque facere autem nemo eaque fugiat animi temporibus quae
              fuga! Accusantium illum modi debitis doloribus odit.
            </p>
          </div>
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
          <Button text="Cotizar" />
        </div>
      </div>
    </div>
  );
};

export default QuoteStep3;
