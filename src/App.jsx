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
      <a href="https://github.com/rmiller999/Project-1" target="_blank" class="project project-tile">
        <img class="project-pic" src="/yahtzee.png" alt="project"/>
        <div class="project-title">Yahtzee Game</div>
      </a>
      <a href="https://whispering-beach-72857.herokuapp.com" target="_blank" class="project project-tile">
        <img class="project-pic" src="/project2.png" alt="project"/>
        <div class="project-title">Game Database</div>
      </a>
      <a href="https://mighty-atoll-95816.herokuapp.com" target="_blank" class="project project-tile">
        <img class="project-pic" src="/project3.png" alt="project"/>
        <div class="project-title">Nutri-Facts</div>
      </a>
      <a href="https://github.com/rmiller999/project4" target="_blank" class="project project-tile">
        <img class="project-pic" src="/project4.png" alt="project"/>
        <div class="project-title">Seattle Events</div>
      </a>
      <a href="https://github.com/rmiller999/react-pokedex" target="_blank" class="project project-tile">
        <img class="project-pic" src="/pokedex.png" alt="project"/>
        <div class="project-title">React Pokedex</div>
      </a>
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
