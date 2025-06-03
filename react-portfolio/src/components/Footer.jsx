import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <p>&copy; {new Date().getFullYear()} My Portfolio</p>
            <p>Follow me on social media!</p>
            <div className="flex justify-center space-x-4">
                <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center">
                    <FaGithub className="mr-2" /> {/* GitHub Icon */}
                    GitHub
                </a>
                <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center">
                    <FaLinkedin className="mr-2" /> {/* LinkedIn Icon */}
                    LinkedIn
                </a>
                <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center">
                    <FaTwitter className="mr-2" /> {/* Twitter Icon */}
                    Twitter
                </a>
            </div>
        </footer>
    );
}

export default Footer;
