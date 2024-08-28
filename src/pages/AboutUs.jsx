import React from 'react';
import Head from '../components/Head';
import Footer from '../components/Footer';
import './AboutUs.css';
import backgroundImage from '../assets/background.png'; // Arka plan görseli

const AboutUs = () => {
  return (
    <div className="about-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Head />
      <div className="about-content">
        <div className="about-section">
          <h2>Who We Are?</h2>
          <p>
            Quick Vision Studios is a software company managed by a young and dynamic team. We develop applications that improve people's lives by focusing on user satisfaction and leveraging technology. With dedication, we strive to enhance the user experience to the fullest in each of our projects.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Quick Vision Studios, our mission is to continuously strive to understand and meet the needs of our users using artificial intelligence technologies. Operating on the principles of innovative thinking and continuous learning, we aim to provide the best service to enhance users' enjoyment and efficiency in their work on this platform. We remain steadfast in our commitment to advancing further in the industry in line with our future goals.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            Our vision at Quick Vision Studios is to become one of the leading companies in the industry by offering solutions that simplify and enhance people's daily lives using technology. With our creative ideas and unique approaches, we aim to deliver successful projects on a global scale.
          </p>
        </div>
        <div className="about-section">
          <h2>At Quick Vision Studios, we embrace the following values:</h2>
          <ul>
            <li><strong>User Focus:</strong> We strive to understand our users' needs and add value to them.</li>
            <li><strong>Innovation:</strong> We aim to be pioneers in technology by constantly developing new ideas and solutions.</li>
            <li><strong>Quality:</strong> We ensure reliability by delivering high-quality products and services.</li>
            <li><strong>Collaboration:</strong> By emphasizing teamwork and sharing, we achieve success together.</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Quick Vision Studios is managed by an experienced team in the industry. Each member of our team contributes to projects with a user-centric approach, staying abreast of current developments in the world of technology. We believe in the power of collaboration and aim for success as a team in every project we undertake.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
