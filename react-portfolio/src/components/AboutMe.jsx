// AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section id="aboutme">
      <h2>About Me</h2>
      <img 
        src="./assets/IMG_0759.JPG" // Use the relative path to the image
        alt="A.J. Kozlak II" 
        className="avatar" 
      />
      <p>
        Hello! I'm A.J. Kozlak II, a new, excited web developer with a love for learning all the new ways code can be constructed.  
        I have been learning through school for the last six months and have learned many things including React, TypeScript, Node, and much more. 
        My goal is to build applications that enhance user experiences and solve real-world problems.
      </p>
    </section>
  );
};

export default AboutMe;