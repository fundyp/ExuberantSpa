import React, { useState } from 'react';
import './header.css';  // Import the corresponding CSS file

function Header() {
  const [activeTab, setActiveTab] = useState('home');

  const handleScroll = (section, offset = 0) => {
    const element = document.getElementById(section);
    const top = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });

    setActiveTab(section);
  };

  return (
    <header className="header">
      <img src="/Exuberantlogo.png" alt="Exuberant Beauty Spa" className="logo"/>
      <div className="header-divider"></div>
      <nav className="nav-container">
        <img src="/favicon-1.png" alt="Exuberant Beauty Spa" className="logo2"/>
        
        <ul className="nav-list">
          <li 
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleScroll('home')}
          >
            Home
          </li>
          <li 
            className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleScroll('about', 0)} // Adjust the offset for "About Us"
          >
            About Us
          </li>
          <li 
            className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => handleScroll('services', 0)} // Adjust the offset for "Services"
          >
            Services
          </li>
          <li 
            className={`nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')} // Scroll or navigate to the Gallery page
          >
            Gallery
          </li>
          <li 
            className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')} // Scroll or navigate to the Contact Us page
          >
            Contact Us
          </li>
          <li 
            className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')} // Scroll or navigate to the Reviews page
          >
            Reviews
          </li>
        </ul>
      </nav>
      <div className="header-divider"></div>
    </header>
  );
}

export default Header;
