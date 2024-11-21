import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as Behance } from "../../icons/behance.svg";
import { ReactComponent as Instagram } from "../../icons/bxl-instagram-alt.svg";

const Nav = ({ isMobile }) => {
  const [isVisible, setVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const clickEvent = (visibility) => {
    scrollToTop();
    setVisible(visibility);
  };

  return (
    <nav>
      {isVisible ? (
        <span className="nav_background" />
      ) : (
        <span className="top_nav_background" />
      )}
      <div className={`${isVisible ? "" : "not_"}visible`}>
        <div className="top_nav">
          <div className="side_a">
            <Link to={"/"} onClick={() => clickEvent(false)}>
              <Logo viewBox="0 0 210 70" />
            </Link>
          </div>
          <div className="side_b">
            <div className="social">
              {isVisible ? <p>SIGUENOS</p> : isVisible}
              <a
                href="https://www.instagram.com/skydergdl/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram viewBox="0 0 30 29" />
              </a>
              <a
                href="https://www.behance.net/skyder"
                target="_blank"
                rel="noreferrer"
              >
                <Behance viewBox="0 0 28 32" />
              </a>
            </div>
            <button onClick={() => setVisible(!isVisible)}>
              <span className="bar1" />
              <span className="bar2" />
            </button>
          </div>
        </div>
        {isVisible ? (
          <div className={`${isMobile ? "mobile " : ""}bottom_nav`}>
            <Link
              className="nav_links"
              to="/"
              onClick={() => clickEvent(!isVisible)}
            >
              INICIO
            </Link>
            <p>SERVICIOS</p>
            <Link
              className="nav_links service"
              to="/services/servicio_drone"
              onClick={() => clickEvent(!isVisible)}
            >
              LEVANTAMIENTO DRONE
            </Link>
            <Link
              className="nav_links service"
              to="/services/contenido_redes"
              onClick={() => clickEvent(!isVisible)}
            >
              CONTENIDO PARA REDES
            </Link>
            <Link
              className="nav_links service"
              to="/services/video_empresas"
              onClick={() => clickEvent(!isVisible)}
            >
              VÍDEO PARA EMPRESAS
            </Link>
            <Link
              className="nav_links service"
              to="/services/cobertura_eventos"
              onClick={() => clickEvent(!isVisible)}
            >
              COVERTURA DE EVENTOS
            </Link>
            <Link
              className="nav_links"
              to="/quote"
              onClick={() => clickEvent(!isVisible)}
            >
              COTIZACIONES
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Nav;
