import React from 'react';
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <div id="parent">
      <section id="home">
      <video 
        className="intro-video" 
        src="/ExuberantIntro-aspect4.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      />
      
      <div className="welcome-slogan">
        <h2 >WELCOME</h2>
        <h1>Elevate Your Beauty, Revitalize Your Body.</h1>
        <p> Experience rejuvenation from head to toe with our advanced treatments at Exuberant.</p>
        
      </div>
    </section>

      <section id="about">

      
        <div className="about-container">

          <h2>About Us :D</h2>
        </div>
        
      </section>

      <section id="services">
        <div className="services-container">
          <h2>Services :D</h2>

        </div>
        
      </section>
    </div>
    
    
    
  );

  
}

export default Home;
