import React from 'react';
import Header from './header';
import Home from './Home'; // Import the Home component
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home /> {/* Include the Home component */}
      <section id="about">
        {/* About Us content */}
      </section>
      <section id="services">
        {/* Services content */}
      </section>
      <section id="gallery">
        {/* Gallery content */}
      </section>
      <section id="contact">
        {/* Contact Us content */}
      </section>
      <section id="reviews">
        {/* Reviews content */}
      </section>
    </div>
  );
}

export default App;
