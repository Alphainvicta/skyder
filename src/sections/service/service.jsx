import React from "react";
import "./service.css";
import { Link } from "react-router-dom";

import Dblock from "../../components/description-block/description-block.jsx";
import Button from "../../components/button/button.jsx";

const Service = ({ title, description, image, details, cost, additional }) => (
  <div className="service-cont">
    <div className="info-cont">
      <div className="service-title">{title}</div>
      <div className="service-description">{description}</div>
      <div className="image-cont">
        <img src={image} alt="" />
      </div>
    </div>
    <Dblock title="Enfoque del servicio" details={details} />
    <hr />
    <Dblock title="Aplicaciones" details={cost} />
    <hr />
    <Dblock title="Ideal para" details={additional} />
    <hr />
    <div className="goquote-cont">
      <div className="title">Quiero contactar a un ejecutivo</div>
      <div className="extra-slogan">
        Recibe una cotización personalizada en menos de 24 horas
      </div>
      <div className="button">
        <Link to="/quote">
          <Button text="Contáctanos" />
        </Link>
      </div>
    </div>
  </div>
);

export default Service;
