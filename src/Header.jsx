import React from 'react';
import './style.css'; 
function Header() {
    return (
      <div>
        <header id="NAV">
        <div className="center">
            <ul>
                <li><a href="#main">Homepage</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </header>
      </div>
    );
  }
  
  export default Header;