import './app.scss';
import Nav from './sections/nav/nav.jsx';
import Footer from './sections/footer/footer.jsx';

import Home from './sections/home/home.jsx'; 

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
