import React from "react";
import "./service.css";
import { Link } from "react-router-dom";

import Dblock from "../../components/description-block/description-block.jsx";
import Button from "../../components/button/button.jsx";

const Service = ({ title, description, image, details, cost, additional }) => (
  <div className="service_cont">
    <div className="info_cont">
      <div className="service_title">{title}</div>
      <div className="service_description">{description}</div>
      <div className="image_cont">
        <img src={image} alt="" />
      </div>
    </div>
    <Dblock title="Enfoque del servicio" details={details} />
    <Dblock title="Aplicaciones" details={cost} />
    <Dblock title="Ideal para" details={additional} />
    <div className="goquote_cont">
      <div className="title">Quiero contactar a un ejecutivo</div>
      <div className="extra_slogan">
        Recibe una cotización personalizada en menos de 24 horas
      </div>
      <div className="button">
        <Link to="/quote">
          <Button text="Cotiza aqui" />
        </Link>
      </div>
    </div>
  </div>
);

export default Service;
