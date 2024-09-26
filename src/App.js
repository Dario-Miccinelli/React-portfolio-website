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
      <header className="bg-custom-blue text-white py-5 min-vh-100 d-flex">
        <div className="container align-items-between d-flex flex-column justify-content-between">
          <div className="d-flex">
            <h1 className='Title-Header w-75'>Hej, I’m <br></br> &lt;Dario Miccinelli /&gt; </h1>
              
              <h4 className='w-25'> <FontAwesomeIcon icon={faLocationDot}   size="1x" /> Based in Aarhus</h4>
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
      <section className="about-me py-5">
        <div className="container">
          <h3 className="text-info text-center mb-4">About me</h3>
          <p className="text-center">
            Hello! I'm Dario, a passionate and driven individual who ventured into programming several years ago and quickly discovered a deep fascination for the field...
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills py-5 bg-light">
        <div className="container">
          <h3 className="text-info text-center mb-4">My Skills</h3>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="p-3 bg-info text-white rounded">HTML, CSS, JavaScript</div>
            </div>
            <div className="col-md-4">
              <div className="p-3 bg-info text-white rounded">React, Node.js, Vue.js</div>
            </div>
            <div className="col-md-4">
              <div className="p-3 bg-info text-white rounded">PHP, Laravel, MySQL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience py-5">
        <div className="container">
          <h3 className="text-info text-center mb-4">Work Experience</h3>
          <div className="row">
            <div className="col-md-4">
              <h4>Boolean Careers | 6 months</h4>
              <p>Full Stack Web Developer</p>
            </div>
            <div className="col-md-4">
              <h4>Systrategy | 1 year</h4>
              <p>Full Stack Web Developer</p>
            </div>
            <div className="col-md-4">
              <h4>Eigenmann & Veronelli | 1 year</h4>
              <p>Developer and ERP Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Dario Miccinelli. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
