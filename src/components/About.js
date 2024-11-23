import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>My Learning Journey</h2>
      <div className="about-content">
        <p className="about-intro">
          "Every journey starts with a single step. This is my story of growing from a curious beginner to a passionate developer."
        </p>
        <p>
          My journey into web development began with a simple desire to understand how websites work. 
          Starting from the basics, I explored HTML, CSS, and JavaScript, gradually building my confidence 
          with small projects. The road was filled with challenges, but each hurdle taught me something valuable.
        </p>
        <p>
          As I delved deeper, I discovered the power of combining creativity with technology. 
          Today, I integrate cutting-edge tools like AI into my projects to deliver innovative and engaging user experiences.
        </p>
        <p className="about-vision">
          Learning never stops, and I’m excited to continue this journey—exploring new possibilities and creating impactful solutions.
        </p>
      </div>
      <div className="about-video">
        <video controls className="about-video-player">
          <source src="/learning process.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default About;
