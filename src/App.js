import React from 'react';
import Header from "./Header";
import MainHome from "./MainHome";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import './style.css'; 

function App() {
  return (
    <div>
    <Header />
    <MainHome />
    <About/>
    <Skills/>
    <Projects/>
    <Footer />
   
       <div class="tooltip changetoright">
      <div class="sticky">
       <span class="tooltiptext changetoright">Back To Top</span>
        <a href="#NAV"><i class="fas fa-arrow-alt-circle-up fa-4x"></i></a>
      </div></div>
      
      <div class="whatsapp">
      <div class="tooltip">
        <a href="https://wa.me/9023037259"><i class="fab fa-whatsapp fa-4x"></i></a>
      <span class="tooltiptext">Chat Over Whatsapp</span>
    </div></div>
    </div>
  );
}

export default App;