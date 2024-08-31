import React from 'react';
import './header.css';  // Import the corresponding CSS file

function Header() {
  return (
    <header className="header">
      <img src={`${process.env.PUBLIC_URL}/exuberantlogo.png`} alt="Exuberant Beauty Spa" className="logo" />
      <div className="header-divider"></div>
      <nav className="nav-container">
        <h2 className="nav-header">Exuberant</h2>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Gallery</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Reviews</li>
        </ul>
      </nav>
      <div className="header-divider"></div>
    </header>
  );
}

export default Header;
