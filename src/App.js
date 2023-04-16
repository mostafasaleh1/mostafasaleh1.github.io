import './App.css';
import Header from "./Main/Header.js";
import Home from "./Main/Home.js";
import About from "./Main/About.js";
import Services from "./Main/Services.js";
import Portfolio from './Main/Portfolio.js';
import Contact from "./Main/Contact.js";
import Footer from './Main/Footer.js';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;