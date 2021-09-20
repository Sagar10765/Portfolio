import React from 'react';
import './style.css'; 
function Footer() {
    return (
      <div className="App">
        <footer className="center" id="Contact">
      <h1>Stay Connected</h1>
      <div className="social_media_icons">
        <a href="https://www.instagram.com/manocha.sagar_10/" target="_blank_"
          ><i className="fab fa-instagram"></i
        ></a>
        <a href="https://gist.github.com/sagar10765" target="_blank_"
          ><i className="fab fa-github"></i
        ></a>
        <a
          href="https://www.youtube.com/channel/UCyQ0qo5G3oWpntUUTjZTbIw"
          target="_blank_"
          ><i className="fab fa-youtube"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/sagar-manocha-1b5628103/"
          target="_blank_"
          ><i className="fab fa-linkedin"></i
        ></a>
      </div>
    </footer>
      </div>
    );
  }
  
  export default Footer;