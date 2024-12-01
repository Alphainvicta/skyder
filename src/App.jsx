import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

import Nav from "./sections/nav/nav.jsx";
import Footer from "./sections/footer/footer.jsx";
import Home from "./sections/home/home.jsx";
import Servicelist from "./sections/service/service-list.jsx";
import Quote from "./sections/quote/quote.jsx";

const libraries = ["places"];

function App() {
  const pathname = useLocation();
  const footerRef = useRef(<footer />);
  const [deviceType, setDeviceType] = useState(false);

  const checkDeviceType = () => {
    const details = navigator.userAgent;
    const regexp = /android|iphone|kindle|ipad/i;
    const isMobileDevice = regexp.test(details);

    if (isMobileDevice && navigator.maxTouchPoints > 0) {
      setDeviceType(true);
    } else {
      setDeviceType(false);
    }
  };

  useEffect(() => {
    checkDeviceType();

    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAPS_API}
      libraries={libraries}
    >
      <div className="App">
        <Nav isMobile={deviceType} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services/:service"
            element={<Servicelist path={pathname.pathname} />}
          />
          <Route path="/quote" element={<Quote footerRef={footerRef} />} />
        </Routes>
        <Footer footerRef={footerRef} />
      </div>
    </LoadScript>
  );
}

export default App;
