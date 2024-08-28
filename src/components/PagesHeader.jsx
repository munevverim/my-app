import React from 'react';
import './PagesHeader.css'
import logo from '../assets/header.png';  

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Quick Vision Studios Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
