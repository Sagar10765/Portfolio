import React from 'react';
import './style.css'; 
function Projects() {
    return (
      <section class="projects center" id="Projects">
      <h1 class="project_heading">Projects</h1>
      <div class="container center">
        <div class="main_box center">
          <div class="icon center">
            <i class="fas fa-clinic-medical"></i>
          </div>
          <div class="box">
            <h1>Patient Record Management</h1>
            <p>
            I created Patient Record Management project for Guru Nanak Dental Clinic to help them manage thier patients records 
            </p>
            <div class="links">
              <a
                href="https://github.com/Sagar10765/DentalClinic"
                target="_blank_"
                >Github Repo<i class="fas fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="main_box center">
          <div class="icon center">
            <i class="fas fa-tasks"></i>
          </div>
          <div class="box">
            <h1>Task Management App</h1>
            <p>
              Task Management App using HTML, CSS and JS.
            </p>
            <div class="links">
              <a
                href="https://github.com/Sagar10765/TaskManagementApp"
                target="_blank_"
                >Github Repo<i class="fas fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="main_box center">
          <div class="icon center">
            <i class="fas fa-stroopwafel"></i>
          </div>
          <div class="box">
            <h1>Zomato Landing Page</h1>
            <p>
            Zomato Landing Page using HTML, CSS.
            </p>
            <div class="links">
              <a
                href="https://github.com/Sagar10765/zomato_landing_page"
                target="_blank_"
                >Github Repo<i class="fas fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  
  export default Projects;