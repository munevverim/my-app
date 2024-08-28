import React from 'react';
import './Context.css';
import backgroundImage from '../assets/header.png'; 
import box1 from '../assets/first_page_qarch.png';
import box2 from '../assets/first_page_qarch.png';

const Context = () => {
  const handleStart = () => {
    window.location.href='http://192.168.1.180/social-auth/login/google-oauth2/';
  }
  return (
    <div className="context">
      <div className="image-container">
        <img src={backgroundImage} alt="Background" className="header-image" />
      </div>
      <div className="boxes-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="box">
          <img src={box1} alt="kutucuk arka plani"  className='box-image'/>
          </div>
          
        ))}
      </div>
      <div className="button-container">
        <button className='start-button' onClick={handleStart}>Let's Start</button>

      </div>
    </div>
  );
};

export default Context;
