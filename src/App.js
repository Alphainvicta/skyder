import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./sections/nav/nav.jsx";
import Footer from "./sections/footer/footer.jsx";

import Home from "./sections/home/home.jsx";
import Servicelist from "./sections/service/service-list.jsx";
import Quote from "./sections/quote/quote.jsx";

function App() {
  const pathname = useLocation();

  return (
    <div className="App">
      <Nav />
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
