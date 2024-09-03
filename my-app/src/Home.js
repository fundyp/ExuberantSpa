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

          <div className="about-header">
            
            <h1 id="about-h1">Our Mission</h1>
            <img src="/favicon-1.png" alt="Exuberant Beauty icon" className="exuberant-icon"/>
          </div>

          <div>
          <p>
          At Exuberant Beauty Spa, our mission is to empower every client with the confidence and well-being they deserve. We believe that beauty and wellness go hand in hand, and our goal is to provide a sanctuary where both thrive. Our services are meticulously designed to rejuvenate, refresh, and renew, delivering lasting results that enhance not only your appearance but also your inner harmony. Guided by the principles of holistic wellness and the latest advancements in aesthetic care, we are committed to offering personalized treatments that cater to your unique needs. Whether it's through body contouring, rejuvenating facials, or soothing massages, our aim is to help you look and feel your best, inside and out.
          </p>
        </div>
          
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
