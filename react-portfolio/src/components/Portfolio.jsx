import React from 'react';

const projects = [
  {
    title: 'Project One',
    image: './assets/project-one.jpg', // Replace with actual image paths
    deployedUrl: 'http://localhost:5173/#aboutme', // Replace with actual deployed URL
    githubUrl: 'https://github.com/ajkozlak2/react-portfolio', // Replace with actual GitHub URL
  },
  {
    title: 'Project Two',
    image: './assets/project-two.jpg',
    deployedUrl: 'https://example.com/project-two',
    githubUrl: 'https://github.com/username/project-two',
  },
  {
    title: 'Project Three',
    image: './assets/project-three.jpg',
    deployedUrl: 'https://example.com/project-three',
    githubUrl: 'https://github.com/username/project-three',
  },
  {
    title: 'Project Four',
    image: './assets/project-four.jpg',
    deployedUrl: 'https://example.com/project-four',
    githubUrl: 'https://github.com/username/project-four',
  },
  {
    title: 'Project Five',
    image: './assets/project-five.jpg',
    deployedUrl: 'https://example.com/project-five',
    githubUrl: 'https://github.com/username/project-five',
  },
  {
    title: 'Project Six',
    image: './assets/project-six.jpg',
    deployedUrl: 'https://example.com/project-six',
    githubUrl: 'https://github.com/username/project-six',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-links">
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                View Deployed App
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;