import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

  <>
    <nav id="navbar">
      <ul>
        <li><a href="#welcome-section">About Me</a>
        </li>
        <li><a href="#projects">Projects</a>
        </li>
        <li><a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div id="welcome-section" class="intro">
      <img class="profile_pic" src="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"/>
      <h1>Hello I am Reid Miller</h1>
      <p>A Web Developer</p>
    </div>
    <div id="projects" class="projects">
      <h2 class="project_header">Here Are My Project's</h2>
      <a href="https://codepen.io/rmiller9/pen/vMvaqw?editors=1100"     target="_blank" class="project project-tile"/>
        <img class="project-pic" src="https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTU4MjM1Nzg4MDI1Mjc2MzQy/teddy-roosevelt-90009235.webp" alt="project"/>
        <div class="project-title">Tribute Page</div>
      <a href="https://codepen.io/rmiller9/pen/QPYveP" target="_blank" class="project project-tile"/>
        <img class="project-pic" src="https://codepen.io/canlit/pen/NwQebJ/image/small.png" alt="project"/>
        <div class="project-title">Survey Form</div>
      <a href="https://codepen.io/rmiller9/pen/XQLZvP" target="_blank" class="project project-tile"/>
        <img class="project-pic" src="https://i.ytimg.com/vi/oRmQN244Ir0/maxresdefault.jpg" alt="project"/>
        <div class="project-title">Landing Page</div>
      <a href="https://codepen.io/rmiller9/pen/mgNzQY" target="_blank" class="project project-tile"/>
        <img class="project-pic" src="https://codepen.io/freeCodeCamp/pen/NdrKKL/image/large.png" alt="project"/>
        <div class="project-title">Technical Document</div>
    </div>
    <div id="contact" class="contact">
      <div class="header">
        <h2>Contact Me</h2>
      </div>
      <div class="icons">
      <a href="https://www.facebook.com/" target="_blank" class="contact-info" id="facebook">Facebook</a>
      <a href="https://www.instagram.com/meidriller/?hl=en" target="_blank" class="contact-info" id="instagram">Instagram</a>
      <a href="https://www.linkedin.com/in/reid-miller-01789666/" target="_blank" class="contact-info" id="linkedin">LinkedIn</a>
      <a href="mailto:example@example.com" target="_blank" class="contact-info" id="google">Email</a>
      <a href="https://www.freecodecamp.org/rmiller9" target="_blank" class="contact-info" id="profile-link">FCC Profile</a>
      </div>
    </div>
    <footer>
      <p>© Created by: Reid Miller</p>
    </footer>
  </>
  );
}

export default App;
