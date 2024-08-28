import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import './Contact.css';

import twitterIcon from '../assets/icons/x.png'; 
import pinterestIcon from '../assets/icons/pinterest.png'; 
import instagramIcon from '../assets/icons/instagram.png'; 
import linkedinIcon from '../assets/icons/linkedin.png'; 
import youtubeIcon from '../assets/icons/youtube.png'; 

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-container">
        <div className="contact-section">
          <h2>FOLLOW US ON SOCIAL MEDIA</h2>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src={pinterestIcon} alt="Pinterest" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="contact-section">
          <h2>CONTACT US</h2>
          <p>
            At QUICK VISION STUDIOS, we are always happy to hear from you.
            You can reach us via:
          </p>
          <p className="email">quickvisionai@gmail.com</p>
          <p>
            Your feedback and suggestions are invaluable to us as we continually strive
            to improve our services. Write to us, and let's achieve better together!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
