import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="footer-cont">
    <div className="side_a">
      <div className="rights">
        Skyder © 2024 - todos los derechos reservados.
      </div>
    </div>

    <div className="side_b">
      <a
        className="number"
        href="https://wa.me/523313058825"
        target="_blank"
        rel="noreferrer"
      >
        (33) 1305-8825
      </a>
      <a
        className="mail"
        href="mailto:ventas@skyder.mx"
        target="_blank"
        rel="noreferrer"
      >
        ventas@skyder.mx
      </a>
    </div>
    <div className="footer_background" />
  </div>
);

export default Footer;
