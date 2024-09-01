import React from 'react';
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <div id="parent">
      <section id="home">
      <video 
        className="intro-video" 
        src="/ExuberantIntro-3.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      />
      {/* Add any additional content for the home section here */}
    </section>

      <section id="about">

        <div className="about-divider">
          
        </div>
        <div className="about-container">

          <h2>About Us :D</h2>
        </div>
        
      </section>

      <section id="services">

        <h2>Services :D</h2>
      </section>
    </div>
    
    
    
  );

  
}

export default Home;
