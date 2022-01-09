import './app.scss';
import { Routes, Route } from "react-router-dom";
import Nav from './sections/nav/nav.jsx';
import Footer from './sections/footer/footer.jsx';

import Home from './sections/home/home.jsx';
import List2 from './sections/service/service-list.jsx';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:service" element={<List2 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
