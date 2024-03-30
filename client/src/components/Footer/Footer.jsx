import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="icons-container">
          <a href="https://www.linkedin.com/in/varunix/"><FontAwesomeIcon className="icons" icon={faLinkedin} /></a>
          <a href="https://github.com/varunix"><FontAwesomeIcon className="icons" icon={faGithub} /></a>
          <FontAwesomeIcon className="icons" icon={faEnvelope} onClick={() => window.location = "mailto:varunchaubey4@gmail.com"} />
        </div>
        <div className="about-container">
          <span className="footer-title">Created by: Vaun Chaubey</span>
        </div>
      </div>
    </div> 
  )
}

export default Footer;
