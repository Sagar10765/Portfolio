import React from 'react';
import './style.css'; 
function Skills() {
    return (
      <div className="App">
       <section class="skills center" id="Skills">
      <p class="skill_head">Skills</p>
      <div class="skill_box center">
        <div class="box">
          <i class="fab fa-html5 fa-4x"></i>
          <p>HTML</p>
        </div>
        <div class="box">
          <i class="fab fa-css3-alt fa-4x"></i>
          <p>CSS</p>
        </div>
        <div class="box">
          <i class="fab fa-js-square fa-4x"></i>
          <p>Javascript</p>
        </div>
        <div class="box">
          <i class="fab fa-react fa-4x"></i>
          <p>React</p>
          </div>
        <div class="box">
          <i class="fab fa-python fa-4x"></i>
          <p>Python</p>
          </div>       
        <div class="box">
          <i class="fab fa-java fa-4x"></i>
          <p>JAVA</p>
          </div>  
        <div class="box">
          <i class="fab fa-cuttlefish fa-4x"></i>
          <p>C</p>
          </div>
        <div class="box">
          <i class="fas fa-code fa-4x"></i>
          <p>C++</p>
          </div>

         <div class="box">
          <i class="fas fa-camera fa-4x"></i>
          <p>Photography</p>
          </div>
          <div class="box">
          <i class="fas fa-video fa-4x"></i>
          <p>Cinematography</p>
        </div>
        <div class="box">
          <i class="fas fa-images fa-4x"></i>
          <p>Photo Retoucher</p>
        </div>
        <div class="box">
          <i class="fas fa-file-video fa-4x"></i>
          <p>Video Editor</p>
        </div>
        </div>
    </section>
      </div>
    );
  }
  
  export default Skills;