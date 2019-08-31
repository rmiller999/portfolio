import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // useEffect(() => {
  //   (document).onScroll(function(){
  //     var nav = ("#mainNavbar");
  //     nav.toggleClass("scrolled", (this).scrollTop() > nav.height());
  //   });
  // },[])
  return (

  // <>
  //   <nav id="navbar">
  //     <ul className="links" >
  //       <li><a href="#welcome-section">About Me</a>
  //       </li>
  //       <li><a href="#projects">Projects</a>
  //       </li>
  //       <li><a href="#contact">Contact</a>
  //       </li>
  //     </ul>
  //   </nav>
  //   <div id="welcome-section" class="intro">
  //     {/* <div className="quoteBox">
  //       <h2 className="quote" >Passion-driven web developer creating new and exciting user-focused projects. 
  //         I enjoy tackling unique problems through project planning strategies that implement optimized solutions. 
  //         I thrive when projects are fun and engaging while simultaneously challenging my knowledge
  //         and skills to generate new ideas and adapt to new situations.</h2>
  //     </div> */}
  //     <img class="profile_pic" src="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"/>
  //     <h1>Hello I am Reid Miller</h1>
  //     <p>A Web Developer</p>
  //   </div>
  //   <div id="projects" class="projects">
  //     <h2 class="project_header">Here Are My Project's</h2>
  //     <a href="https://github.com/rmiller999/Project-1" target="_blank" class="project project-tile">
  //       <img class="project-pic" src="/yahtzee.png" alt="project"/>
  //       <div class="project-title">Yahtzee Game</div>
  //     </a>
  //     <a href="https://whispering-beach-72857.herokuapp.com" target="_blank" class="project project-tile">
  //       <img class="project-pic" src="/project2.png" alt="project"/>
  //       <div class="project-title">Game Database</div>
  //     </a>
  //     <a href="https://mighty-atoll-95816.herokuapp.com" target="_blank" class="project project-tile">
  //       <img class="project-pic" src="/project3.png" alt="project"/>
  //       <div class="project-title">Nutri-Facts</div>
  //     </a>
  //     <a href="https://github.com/rmiller999/project4" target="_blank" class="project project-tile">
  //       <img class="project-pic" src="/project4.png" alt="project"/>
  //       <div class="project-title">Seattle Events</div>
  //     </a>
  //     <a href="https://github.com/rmiller999/react-pokedex" target="_blank" class="project project-tile">
  //       <img class="project-pic" src="/pokedex.png" alt="project"/>
  //       <div class="project-title">React Pokedex</div>
  //     </a>
  //   </div>
  //   <div id="contact" class="contact">
  //     <div class="header">
  //       <h2>Contact Me</h2>
  //     </div>
  //     <div class="icons">
  //     <a href="https://github.com/rmiller999" target="_blank" class="contact-info" id="github">GitHub</a>
  //     <a href="https://www.linkedin.com/in/reid-miller-01789666/" target="_blank" class="contact-info" id="linkedin">LinkedIn</a>
  //     <a href="mailto:example@example.com" target="_blank" class="contact-info" id="google">Email</a>
  //     <a href="https://www.freecodecamp.org/rmiller9" target="_blank" class="contact-info" id="profile-link">FCC Profile</a>
  //     </div>
  //   </div>
  //   <footer>
  //     <p>© Created by: Reid Miller</p>
  //   </footer>
  // </>


  <body>

    <nav id="mainNavbar" class="navbar navbar-dark navbar-expand-md py-0 fixed-top">
      <a href="#" class="navbar-brand">CANDY</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navLinks">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#welcome-section" class="nav-link">HOME</a>
          </li>
          <li class="nav-item">
              <a href="#projects" class="nav-link">PROJECTS</a>
          </li>        
          <li class="nav-item">
              <a href="#contact" class="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>

    <section class="container-fluid px-0" id="welcome-section">
      <div class="intro">
      <img class="profile_pic" src="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"/>
      <h1>Hello I am Reid Miller</h1>
      <h3>A Web Developer</h3>
      </div>
    </section>

    <section class="container-fluid px-0 sections">
      <h1 id="projects" className="projects-header">Here are some of my Projects</h1>
      <div class="row align-items-center content">
        <div class="col-md-6 order-2 order-md-1 noPadd-2">
        <a href="https://github.com/rmiller999/Project-1" target="_blank">
          <img src="/yahtzee.png" alt="" class="img-fluid" />
          </a>
        </div>
        <div class="col-md-6 text-center order-1 order-md-2">
          <div class="row justify-content-center">
            <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <h2>Yahtzee</h2>
              <i class="fas fa-dice fa-lg"></i>              
              {/* <img src="/lolli_icon.png" alt="" class="d-none d-lg-inline" /> */}
              <p class="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit 
                adipisci labore molestias vero, voluptas amet eius 
                explicabo, consequatur ipsa nesciunt soluta omnis est rem pariatur excepturi ut sapiente harum alias. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit 
                adipisci labore molestias vero, voluptas amet eius 
                explicabo, consequatur ipsa nesciunt soluta omnis est rem pariatur excepturi ut sapiente harum alias.</p>
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
                <p class="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit 
                  adipisci labore molestias vero, voluptas amet eius 
                  explicabo, consequatur ipsa nesciunt soluta omnis est rem pariatur excepturi ut sapiente harum alias. 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit 
                  adipisci labore molestias vero, voluptas amet eius 
                  explicabo, consequatur ipsa nesciunt soluta omnis est rem pariatur excepturi ut sapiente harum alias.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 noPadd">
              <img src="/project2.png" alt="" class="img-fluid" />
            </div>
        </div>


        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1 noPadd-2">
              <img src="/project3.png" alt="" class="img-fluid" />
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
              <div class="row justify-content-center">
                <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                  <h2>Nutri Facts</h2>
                  <i class="fas fa-utensils"></i>
                  {/* <img src="/lolli_icon.png" alt="" class="d-none d-lg-inline" /> */}
                  <p class="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit 
                    adipisci labore molestias vero, voluptas amet eius 
                    explicabo, consequatur ipsa nesciunt soluta omnis est rem pariatur excepturi ut sapiente harum alias. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit 
                    adipisci labore molestias vero, voluptas amet eius 
                    explicabo, consequatur ipsa nesciunt soluta omnis est rem pariatur excepturi ut sapiente harum alias.</p>
                </div>
              </div>
            </div>
          </div>
    </section>

    </body>





  );
}

export default App;
