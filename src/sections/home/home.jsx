import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import { ReactComponent as Homevector } from "../../icons/homeVector.svg";
import Homelist from "../../components/home-service/home-service-list.jsx";

const Home = () => {
  const svgRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportWidth = window.innerWidth;

    let normalizedScroll = Math.min(scrollPosition / (viewportWidth * 0.1), 1);
    let normalizedScroll2 = Math.min(
      scrollPosition / (viewportWidth * 0.1),
      10
    );
    let fillOpacity = 1 - normalizedScroll;
    let strokeOpacity = normalizedScroll;

    fillOpacity = Math.max(0, Math.min(fillOpacity, 1));
    strokeOpacity = Math.max(0, Math.min(strokeOpacity, 1));

    let strokeDashoffset = Math.max(
      0,
      Math.min((-1 + normalizedScroll2) * 1000, 1000)
    );

    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");
      paths.forEach((path) => {
        path.style.fillOpacity = fillOpacity.toString();
        path.style.strokeOpacity = strokeOpacity.toString();

        if (strokeOpacity === 1) {
          path.style.strokeDasharray = "1000";
          path.style.strokeDashoffset = strokeDashoffset.toString();
        } else {
          path.style.strokeDasharray = "0";
        }

        path.style.stroke = "black";
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home_cont">
      <div className="vector_cont">
        <Homevector ref={svgRef} />
      </div>
      <div className="main_screen">
        <div className="main_title">
          Drone <span>Studio</span> <br />& operations
        </div>
        <div className="main_slogan">
          Identidad audiovisual + servicios con drone para todas las industrias,{" "}
          <br /> técnica, creativa y más.
        </div>
      </div>
      <Homelist />
    </div>
  );
};

export default Home;
