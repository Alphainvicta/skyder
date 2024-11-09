import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as Behance } from "../../icons/behance.svg";
import { ReactComponent as Instagram } from "../../icons/bxl-instagram-alt.svg";
import { ReactComponent as Burguer } from "../../icons/burguer.svg";
import { ReactComponent as Bclose } from "../../icons/burguerclose.svg";

const Nav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="nav">
      <div className="nav-cont">
        <div className="logo-icon">
          <Link to="/">
            {" "}
            <Logo />{" "}
          </Link>
        </div>
        <a
          className="instagram"
          href="https://www.instagram.com/skydergdl/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          className="behance"
          href="https://www.behance.net/skyder"
          target="_blank"
          rel="noreferrer"
        >
          <Behance />
        </a>
        <div className="burguer">
          <button onClick={() => setVisible(true)}>
            <Burguer />
          </button>
        </div>
      </div>
      {visible && (
        <div className="burgernav-cont">
          <div className="top-cont">
            <div className="logo-icon">
              <Link to="/" onClick={() => setVisible(false)}>
                {" "}
                <Logo />{" "}
              </Link>
            </div>
            <a
              className="instagram"
              href="https://www.instagram.com/skydergdl/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              className="behance"
              href="https://www.behance.net/skyder"
              target="_blank"
              rel="noreferrer"
            >
              <Behance />
            </a>
            <div className="bclose">
              <button onClick={() => setVisible(false)}>
                <Bclose />
              </button>
            </div>
          </div>

          <div className="bottom-cont">
            <Link to="/" onClick={() => setVisible(false)}>
              {" "}
              inicio{" "}
            </Link>
            <p>servicios</p>
            <Link
              className="services-links"
              to="/services/servicio_drone"
              onClick={() => setVisible(false)}
            >
              {" "}
              Levantamiento Drone{" "}
            </Link>
            <Link
              className="services-links"
              to="/services/contenido_redes"
              onClick={() => setVisible(false)}
            >
              {" "}
              Contenido para redes{" "}
            </Link>
            <Link
              className="services-links"
              to="/services/video_empresas"
              onClick={() => setVisible(false)}
            >
              {" "}
              Vídeo para empresas{" "}
            </Link>
            <Link
              className="services-links"
              to="/services/cobertura_eventos"
              onClick={() => setVisible(false)}
            >
              {" "}
              Cobertura de eventos{" "}
            </Link>
            <Link to="/quote" onClick={() => setVisible(false)}>
              {" "}
              Contacto{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
