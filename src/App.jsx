import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 948 ||
        document.documentElement.scrollTop > 948
      ) {
        document.getElementById("mainNavbar").style.background =
          "rgba(255, 255, 255, 0.364)";
      } else {
        document.getElementById("mainNavbar").style.background =
          "rgba(255, 255, 255, 0.164)";
        document.getElementById("span").style.backgroundColor = "none";
      }
    }
  }, []);

  return (
    <body>
      <nav
        id="mainNavbar"
        class="navbar navbar-dark navbar-expand-md py-0 fixed-top"
      >
        <a href="#" className="navbar-brand roll-link">
          <span id="span" data-title="REID MILLER">
            REID MILLER
          </span>
        </a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navLinks"
          aria-label="toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navLinks">
          <ul class="navbar-nav">
            {/* <li class="nav-item">
            <a href="#welcome-section" class="nav-link">HOME</a>
          </li> */}
            <li class="nav-item">
              <a href="#projects" class="nav-link">
                PROJECTS
              </a>
            </li>
            <li class="nav-item">
              <a href="#skills" class="nav-link">
                SKILLS
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">
                CONTACT
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/files/Reid_Miller_Resume.pdf"
                class="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section class="container-fluid px-0" id="welcome-section">
        <div class="intro">
          <img class="profile_pic" src="profile-img.png" alt="Reid Miller" />
          <h1>Hello I am Reid Miller</h1>
          <h3>
            A Full-Stack Developer that thrives to create new and exciting
            projects
            <br /> for others to experience.
          </h3>
        </div>
      </section>

      <section class="container-fluid px-0 sections">
        <h1 id="projects" className="projects-header">
          Here are some of my Projects
        </h1>

        <div class="row align-items-center content">
          <div class="col-md-6 text-center">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2>My Movie DB</h2>
                <i class="fas fa-ticket-alt"></i>
                {/* <img src="/lolli_icon.png" alt="" class="d-none d-lg-inline" /> */}
                <p class="lead">
                  {" "}
                  Created a full-stack app with React (Hooks), Node.Js/Express,
                  MongoDB, Javascript and HTML/CSS along with TheMovieDB API for
                  all movie information.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 noPadd">
            <a
              href="https://github.com/rmiller999/movie_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/movieDB.gif" alt="" class="img-fluid" />
            </a>
          </div>
        </div>

        <div class="row align-items-center content">
          <div class="col-md-6 order-2 order-md-1 noPadd-2">
            <a
              href="https://github.com/rmiller999/Project-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/yahtzee.png" alt="" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-6 text-center order-1 order-md-2">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2>Yahtzee</h2>
                <i class="fas fa-dice fa-lg"></i>
                {/* <img src="/lolli_icon.png" alt="" class="d-none d-lg-inline" /> */}
                <p class="lead">
                  {" "}
                  Created a Yahtzee game clone in the web browser using HTML,
                  CSS and JavaScript. Recreated functionalities of the original
                  game in JavaScript to give the original game feel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row align-items-center content">
          <div class="col-md-6 text-center">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2>Game Database Search</h2>
                <i class="fas fa-gamepad fa-lg"></i>
                {/* <img src="/lolli_icon.png" alt="" class="d-none d-lg-inline" /> */}
                <p class="lead">
                  {" "}
                  Created a web app that allows users to access video games
                  information and save their favorite game to their profile.
                  Developed, designed and implemented a full stack app in
                  Node.js, Express and EJS, using the IGDB API for the video
                  game information. Implemented a SQL database using Sequelize
                  and PostgreSQL.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 noPadd">
            <a
              href="https://whispering-beach-72857.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/project2.png" alt="" class="img-fluid" />
            </a>
          </div>
        </div>

        <div class="row align-items-center content">
          <div class="col-md-6 order-2 order-md-1 noPadd-2">
            <a
              href="https://nutri-facts.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/nutri-facts.gif" alt="" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-6 text-center order-1 order-md-2">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2>Nutri Facts</h2>
                <i class="fas fa-utensils"></i>
                {/* <img src="/lolli_icon.png" alt="" class="d-none d-lg-inline" /> */}
                <p class="lead">
                  {" "}
                  Team project that set out to create an app that would help
                  users track their nutritional facts and set goals for
                  themselves. Created with React, Express, Mongoose, JavaScript
                  and CSS along with the Edamam API for all nutritional facts.
                  Collaborated with UX Design students to help us plan out the
                  layout of our app for better user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="row align-items-center content">
          <div class="col-md-6 text-center">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2>Event Finder</h2>
                <i class="fas fa-ticket-alt"></i>
                {/* <img src="/lolli_icon.png" alt="" class="d-none d-lg-inline" /> */}
        {/* <p class="lead"> Created a web app that would help users find events occurring in the Seattle area based on Sports, Music and Comedy categories.
This is a full stack app created with React using React Hooks and a MongoDB backend, using the TicketMaster API for all the event information.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 noPadd">
            <a href="https://github.com/rmiller999/project4" target="_blank">
              <img src="/project4.png" alt="" class="img-fluid" />
            </a>
            </div>
        </div>  */}

        <div id="skills" class="skills">
          <div class="header">
            <h1 id="projects" className="projects-header">
              My Skills
            </h1>
          </div>
          <div class="icons">
            <i
              className="devicon-javascript-plain colored skillsIcons"
              title="Javascript"
            ></i>
            <i
              className="devicon-python-plain colored skillsIcons"
              title="Python"
            ></i>
            <i
              className="devicon-react-original colored skillsIcons"
              title="React"
            ></i>
            <i
              className="devicon-nodejs-plain colored skillsIcons"
              title="NodeJs"
            ></i>
            <i
              className="devicon-express-original colored skillsIcons"
              title="Express"
            ></i>
          </div>
          {/* <div className="icons" id="contactNames">
        <span className="contactNames">JavaScript</span>
        <span className="contactNames">Python</span>
        <span className="contactNames">React</span>
        <span className="contactNames">NodeJs</span>
        <span className="contactNames">Express</span>
      </div> */}
          <div class="icons">
            <i
              className="devicon-mongodb-plain-wordmark colored skillsIcons"
              title="MongoDB"
            ></i>
            <i
              className="devicon-postgresql-plain colored skillsIcons"
              title="PostgreSQL"
            ></i>
            <i
              className="devicon-html5-plain colored skillsIcons"
              title="HTML5"
            ></i>
            <i
              className="devicon-css3-plain colored skillsIcons"
              title="CSS3"
            ></i>
            {/* <i class="devicon-bootstrap-plain colored skillsIcons" title="Bootstrap"></i> */}
          </div>
          {/* <div className="icons" id="contactNames">
        <span className="contactNames mongo" id="mongo">MongoDB</span>
        <span className="contactNames">PostgreSQL</span>
        <span className="contactNames">HTML5</span>
        <span className="contactNames">CSS3</span>
        <span className="contactNames">Bootstrap</span>
      </div> */}
        </div>

        <div id="contact" class="contact">
          <div class="header">
            <h1 id="projects" className="projects-header">
              Let's Connect
            </h1>
          </div>
          <div class="icons">
            <a
              className="teamIcons"
              href="https://github.com/rmiller999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github" aria-hidden="true" title="GitHub"></i>
            </a>
            <a
              className="teamIcons"
              href="https://www.linkedin.com/in/reidmiller1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fab fa-linkedin-square"
                aria-hidden="true"
                title="LinkedIn"
              ></i>
            </a>
            <a
              href="mailto:reidmiller999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="teamIcons"
              id="google"
            >
              <i class="fas fa-envelope" title="Email"></i>
            </a>
            <a
              href="https://www.freecodecamp.org/rmiller9"
              target="_blank"
              rel="noopener noreferrer"
              class="teamIcons"
              id="profile-link"
            >
              <i class="fas fa-laptop-code" title="FreeCodeCamp"></i>
            </a>
          </div>
          {/* <div className="icons" id="contactNames">
        <span id="github" className="contactNames">GitHub</span>
        <span className="contactNames">LinkedIn</span>
        <span className="contactNames email">Email</span>
        <span className="contactNames FCC">FreeCodeCamp</span>
      </div> */}
        </div>
        <footer>
          <p>© 2020 Created by: Reid Miller</p>
        </footer>
      </section>
    </body>
  );
}

export default App;
