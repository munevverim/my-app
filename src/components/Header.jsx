import React from 'react';
import './Header.css';
import {Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
       
        <div className="header-right">
         <Link to='terms-of-use'>Terms Of Use</Link>
         <Link to='/privacy-policy'>Privacy Policy</Link>
         <Link to='/about-us'>About Us</Link>
         <Link to='/pricing'>Pricing</Link>
          <hr className='custom-line'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
