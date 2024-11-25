import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./sections/nav/nav.jsx";
import Footer from "./sections/footer/footer.jsx";

import Home from "./sections/home/home.jsx";
import Servicelist from "./sections/service/service-list.jsx";
import Quote from "./sections/quote/quote.jsx";

function App() {
  const pathname = useLocation();

  const [deviceType, setDeviceType] = useState(false);

  const checkDeviceType = () => {
    const details = navigator.userAgent;

    // Create a regular expression containing some mobile device keywords
    const regexp = /android|iphone|kindle|ipad/i;

    // Check if the user is on a mobile device
    const isMobileDevice = regexp.test(details);

    // Set the state based on whether it's a mobile device or not
    if (isMobileDevice && navigator.maxTouchPoints > 0) {
      setDeviceType(true);
    } else {
      setDeviceType(false);
    }
  };

  useEffect(() => {
    // Initial check on component mount
    checkDeviceType();

    // Add event listener for window resize
    window.addEventListener("resize", checkDeviceType);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  return (
    <div className="App">
      <Nav isMobile={deviceType} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/:service"
          element={<Servicelist path={pathname.pathname} />}
        />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
