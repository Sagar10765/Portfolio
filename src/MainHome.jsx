import React from 'react';
import './style.css'; 
function MainHome() {
    return (
      <div className="App">
        <section id="main" class="center">
      <div class="user_info">
        <h1 class="user_name">Sagar Manocha</h1>
        <p>Front-End Developer</p>
        <p>Software Developer</p>
        <p>Wedding Cinematography & Photography</p>
      </div>
      <div class="user_img">
        <img src="user_img.jpg" alt="" />
      </div>
    </section>
      </div>
    );
  }
  
  export default MainHome;