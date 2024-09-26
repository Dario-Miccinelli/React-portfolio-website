import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa le icone di GitHub e LinkedIn dal pacchetto delle icone brand
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (

    <div>
      {/* Header Section */}
      <header className="bg-custom-blue text-white py-5 vh-100 d-flex">
        <div className="container align-items-between d-flex flex-column justify-content-between">
          <div className="d-flex">
            <h1 className='Title-Header w-75'>Hej, I’m <br></br> &lt;Dario Miccinelli /&gt; </h1>

            <h4 className='w-25'> <FontAwesomeIcon icon={faLocationDot} size="1x" /> Based in Aarhus</h4>
          </div>


          <div className='d-flex align-items-end'>
            <div className="d-flex flex-column gap-3 w-25">
              <div className='d-flex gap-3'>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <FontAwesomeIcon icon={faGithub} size="2x" />

              </div>

              <a href="https://www.linkedin.com/in/dariomiccinelli/" className="text-white" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              <a href="https://github.com/Dario-Miccinelli" className="text-white" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              <p>Email: <a href="mailto:DarioMiccinelliDK@outlook.com" className="text-white">DarioMiccinelliDK@outlook.com</a></p>
              <p>Phone: +45 91738559</p>
            </div>

            <div className="d-flex w-75 justify-content-end text-end">
              <h1 className='DevTextHeader'>Full Stack Developer</h1>
            </div>

          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="about-me vh-100 d-flex">
        <div className="d-flex">

          <div className='w-75 p-5 m-5'>
            <h2 className="fw-bold mb-3 colorLightBlue">About me</h2>
            <h1 className='fw-bold mb-4'>Dario Miccinelli</h1>
            <p className="fw-medium fs-4">
              Hello! I'm Dario, a passionate and driven individual who ventured into programming several years ago and quickly discovered a deep fascination for the field. This journey has not only fueled my curiosity but has also brought me a wealth of personal and professional satisfaction.🚀 <br></br><br></br>Recently, I relocated to Denmark, embracing a new chapter filled with exciting challenges and opportunities. Every day, I strive to learn something new, and I thrive in environments that encourage growth and innovation. 💡 For me, programming is more than just a career—it's a collaborative and ever-evolving field where teamwork and mutual support are key to achieving great results. I believe in sharing knowledge, helping one another, and contributing to projects that make a meaningful impact. <br></br><br></br>👨‍💻Beyond programming, I have two other passions that shape my perspective: astronomy 🌌 and photography 📸. These interests fuel my curiosity about the world and inspire my approach to both work and life—always seeking new angles, exploring the unknown, and capturing moments of brilliance. ✨
            </p>
          </div>

          <div className=''>
            <img className='ImgAboutMe' src='DarioM.png' alt='personalpic'></img>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-custom-blue vh-100">
        <div className="d-flex flex-column pt-5 ps-5 ms-5">
          <h2 className="colorLightGrey mt-2">My Skills</h2>
          <h1 className="text-white mt-2 fw-bold">Work Experience</h1>
        </div>

        <a href='#Boolean' className='text-decoration-none'>
        <div className="d-flex w-50 justify-content-center text-center mt-5 pt-5">
          <h1 className='DevTextHeader w-25'>01</h1>
          <div className='d-flex flex-column align-self-center ms-5 text-start'>
            <h2 className='colorLightGrey'>Boolean Careers | 6 months</h2>
            <h1 className='text-white'>Full Stack Web Developer</h1>
          </div>
        </div>
        </a>

        <a href='#Systrategy' className='text-decoration-none'>
        <div className="d-flex w-50 justify-content-center text-center mt-5 pt-5">
          <h1 className='DevTextHeader w-25'>02</h1>
          <div className='d-flex flex-column align-self-center ms-5 text-start'>
            <h2 className='colorLightGrey'>Systrategy | 1 year</h2>
            <h1 className='text-white'>Full Stack Web Developer</h1>
          </div>
        </div>
        </a>


        <a href='#EV' className='text-decoration-none'>
        <div className="d-flex w-50 justify-content-center text-center mt-5 pt-5">
          <h1 className='DevTextHeader w-25'>03</h1>
          <div className='d-flex flex-column align-self-center ms-5 text-start'>
            <h2 className='colorLightGrey'>Eigenmann & Veronelli | 1 year</h2>
            <h1 className='text-white'>Developer | ERP Specialist</h1>
          </div>
        </div>
        </a>
      </section>

      {/* Experience Section Boolean */}
      <section id="Boolean" className="vh-100 align-items-between d-flex flex-column justify-content-evenly experience">
        <div className="ms-5">
          <h1 className="colorLightBlue ms-5 ps-5">01 Boolean Careers | 6 months</h1>
          <h1 className="fw-bold ms-5 ps-5">Full Stack Web Developer</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>01</h1>
                <h3 className='colorLightBlue fw-bold'>Introduction to Web Development</h3>
                <p>Started with HTML and CSS, focusing on the fundamentals of web design and structure. Engaged in daily lectures and initial hands-on projects.</p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>02</h1>
                <h3 className='colorLightBlue fw-bold'>JavaScript Basics and SASS</h3>
                <p>Focused on JavaScript for adding interactivity to web pages. Introduced to SASS for advanced CSS styling, learning to use variables, nested rules, and mixins.</p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>03</h1>
                <h3 className='colorLightBlue fw-bold'>Front-End Frameworks</h3>
                <p>Learned Vue.js and jQuery to build dynamic user interfaces. Applied knowledge through practical exercises and projects.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>04</h1>
                <h3 className='colorLightBlue fw-bold'>Database Management</h3>
                <p>Studied MySQL for database design and
                  management. Worked on integrating
                  databases with web applications.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>05</h1>
                <h3 className='colorLightBlue fw-bold'>Back-End Development</h3>
                <p>Learned Laravel and PHP with ObjectOriented Programming (OOP) for serverside programming. Integrated back-end
                  skills with front-end technologies to
                  build full-stack applications.
                  .</p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>06</h1>
                <h3 className='colorLightBlue fw-bold'>Advanced Projects and Review</h3>
                <p>Completed complex projects
                  incorporating all learned
                  technologies, including SASS,
                  Vue.js, and PHP. Participated in
                  final review sessions and refined
                  skills with advanced tutorials.</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* Systrategy Section */}
      <section id="Systrategy" className="experience vh-100 align-items-between d-flex flex-column justify-content-evenly">
        <div className="ms-5">
          <h1 className="colorLightBlue ms-5 ps-5">02 Systrategy | 1 year</h1>
          <h1 className="fw-bold ms-5 ps-5">Full Stack Web Developer</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>01-03</h1>
                <h3 className='colorLightBlue fw-bold'>Training and Development | Team Support</h3>
                <p>Completed in-depth courses in React, Node.js, and
                  JavaScript with guidance from senior developers. Engaged
                  in hands-on exercises to build foundational skills.</p>
                <p>Assisted the team by developing small features, working on UI
                  components, and writing code snippets to support colleagues.
                  Also involved in testing developments to ensure functionality
                  and identify issues.</p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>04-06</h1>
                <h3 className='colorLightBlue fw-bold'> Real-Time Advertising Forecast Dashboard
                </h3>
                <p>Developed a React-based dashboard for
                  real-time forecasting of advertising data
                  from Google Ads via APIs and AWS
                  Lambda. Focused on creating a dynamic UI
                  for a seamless user experience.
                </p>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>07-09</h1>
                <h3 className='colorLightBlue fw-bold'>Application Migration</h3>
                <p>Led the migration of a web application
                  from PHP to React and Node.js.
                  Enhanced the UI for booking television
                  advertising slots, improving usability
                  and modernizing the interface.

                </p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>10-12</h1>
                <h3 className='colorLightBlue fw-bold'>Admin Dashboard Development</h3>
                <p>Created an admin dashboard for
                  managing user data and permissions.
                  Integrated with an Oracle database
                  using Node.js and designed a clean,
                  efficient UI for administrative tasks.
                  .</p>
              </div>
            </div>

          </div>
        </div>

      </section>
      {/* E&V Section */}
     
      <section id="EV" className="experience vh-100 align-items-between d-flex flex-column justify-content-evenly">
        <div className="ms-5">
          <h1 className="colorLightBlue ms-5 ps-5">03  Eigenmann & Veronelli | 1 year</h1>
          <h1 className="fw-bold ms-5 ps-5">Developer and ERP Specialist</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>01-02</h1>
                <h3 className='colorLightBlue fw-bold'>Training and First Tasks</h3>
                <p>Learned NAV, C/SIDE, ERP, and CRM
                  systems. As initial tasks, managed Zoho
                  ticketing and performed basic
                  modifications.

                </p>

              </div>
            </div>
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>03-04</h1>
                <h3 className='colorLightBlue fw-bold'>Intermediate Development
                </h3>
                <p>Advanced C/AL code implementations and
                  data extractions. Started working on
                  system customization: started configuring
                  ERP modules and analyzing processes.

                </p>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>05-08</h1>
                <h3 className='colorLightBlue fw-bold'> Advanced Development</h3>
                <p>Handled complex code implementations
                  and system optimizations. Support role
                  solving technical issues and improved
                  system performance.


                </p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h1 className='DevTextHeader'>09-12</h1>
                <h3 className='colorLightBlue fw-bold'>Performance Tuning</h3>
                <p>Monitored and optimized system
                  performance. User support role
                  providing training, automated tasks,
                  and made strategic enhancements.

                  .</p>
              </div>
            </div>

          </div>
        </div>

      </section>
     

      {/* Footer */}

      <section className="bg-custom-blue text-white py-5 vh-100 d-flex">
        <div className="container align-items-between d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-end">
            <h4 className=''> <FontAwesomeIcon icon={faLocationDot} size="1x" /> Based in Aarhus</h4>
          </div>


          <div className='d-flex align-items-end'>
            <div className="d-flex flex-column gap-3 w-25">
              <div className='d-flex gap-3'>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <FontAwesomeIcon icon={faGithub} size="2x" />

              </div>

              <a href="https://www.linkedin.com/in/dariomiccinelli/" className="text-white" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              <a href="https://github.com/Dario-Miccinelli" className="text-white" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              <p>Email: <a href="mailto:DarioMiccinelliDK@outlook.com" className="text-white">DarioMiccinelliDK@outlook.com</a></p>
              <p>Phone: +45 91738559</p>
            </div>

            <div className="d-flex flex-column w-75 justify-content-end text-end">
              <h1 className='DevTextHeader'>&lt;Dario Miccinelli /&gt;</h1>
              <h3 className='colorLightBlue fw-bold'>Full Stack Web Developer</h3>
            </div>

          </div>
        </div>
      </section>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Dario Miccinelli. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
