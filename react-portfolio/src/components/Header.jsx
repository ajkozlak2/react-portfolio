import React, { useState } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('aboutme'); // Default active section

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header className="header">
      <h1>A.J. Kozlak II's Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a 
              href="#aboutme" 
              onClick={() => handleLinkClick('aboutme')} 
              className={activeSection === 'aboutme' ? 'active' : ''}
            >
              About Me
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              onClick={() => handleLinkClick('portfolio')} 
              className={activeSection === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={() => handleLinkClick('contact')} 
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="#resume" 
              onClick={() => handleLinkClick('resume')} 
              className={activeSection === 'resume' ? 'active' : ''}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;