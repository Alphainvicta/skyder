import React from "react";
import "./home-service.css";
import { Link } from "react-router-dom";
import Button from "../button/button.jsx";

const Hservice = ({ title, description, image, link }) => (
  <div className="hservice_cont">
    <hr />
    <div className="service_cont">
      <div className="text_cont">
        <div className="service_title">{title}</div>
        <div className="service_description">{description}</div>
        <div className="button">
          <Link to={link}>
            <Button text="Más información" />
          </Link>
        </div>
        <div className="button">
          <Link to="/quote">
            <Button text="Cotiza aquí" />
          </Link>
        </div>
      </div>
      <div className="image_cont">
        <img src={image} alt="iservice" />
      </div>
    </div>
  </div>
);

export default Hservice;
