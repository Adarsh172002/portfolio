import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <span>Adarsh Singh</span>
                    <p>Python Developer & AI/ML Engineer</p>
                </div>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/adarshchauhan2002/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Adarsh172002" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="mailto:ac659015@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Adarsh Singh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
