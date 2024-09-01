import React from 'react';
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <section id="home">
      <video 
        className="intro-video" 
        src="/Exuberantintro-3.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      />
      {/* Add any additional content for the home section here */}
    </section>
  );
}

export default Home;
