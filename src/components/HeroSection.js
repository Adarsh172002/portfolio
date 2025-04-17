import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ResumeFile from '../assets/Resume.pdf';
import '../styles/HeroSection.css';

const HeroSection = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <section className="hero-section" ref={heroRef}>
            <div className="hero-content">
                <h1 className="hero-heading">
                    <span className="greeting">Hello, I'm</span>
                    <span className="name">Adarsh Singh</span>
                </h1>
                <div className="hero-typewriter">
                    <TypeAnimation
                        sequence={[
                            'Python Developer',
                            1000,
                            'AI/ML Engineer',
                            1000,
                            'Django Developer',
                            1000,
                            'GenAI Engineer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <p className="hero-description">
                    I build intelligent applications using cutting-edge AI and ML technologies.
                    Passionate about solving complex problems and creating innovative solutions
                    that drive meaningful impact.
                </p>
                <div className="hero-buttons">
                    <Link to="/projects" className="btn btn-primary">
                        View Projects <FaArrowRight />
                    </Link>
                    <a 
                        href={ResumeFile} 
                        download="Adarsh_Singh_Resume.pdf"
                        className="btn btn-secondary"
                    >
                        Resume <FaDownload />
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <div className="tech-stack">
                    <div className="tech-icon python">Python</div>
                    <div className="tech-icon django">Django</div>
                    <div className="tech-icon cpp">C++</div>
                    <div className="tech-icon react">React</div>
                    <div className="tech-icon genai">GenAI</div>
                    <div className="tech-icon ml">ML</div>
                    <div className="tech-icon flask">Flask</div>
                    <div className="tech-icon sql">SQL</div>
                    <div className="tech-icon aws">AWS</div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;