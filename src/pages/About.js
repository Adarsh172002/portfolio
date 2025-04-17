import React from 'react';
import { FaAws, FaDocker, FaCode, FaServer, FaDatabase, FaPython, FaReact } from 'react-icons/fa';
import { SiDjango, SiFlask, SiAccenture, SiElasticsearch, SiLinux, SiGithub } from 'react-icons/si';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
import '../styles/About.css';

// Import project images
import aiImg from '../assets/projects/RCS.jpg';
import mlImg from '../assets/projects/dps.jpg';
import cyImg from '../assets/projects/cyp.jpg';

const About = () => {
    const skills = [
        {
            title: 'Programming & Frameworks',
            icon: <FaCode />,
            skills: [
                'Python, C++',
                'Django, Flask, FastAPI',
                'React JS',
                'SQL, DBMS',
                'HTML, Bootstrap',
            ],
        },
        {
            title: 'AI & Machine Learning',
            icon: <SiAccenture />,
            skills: [
                'Generative AI (GenAI)',
                'Machine Learning',
                'Artificial Intelligence',
                'MLOps',
                'RAG Applications',
            ],
        },
        {
            title: 'Cloud & DevOps',
            icon: <FaAws />,
            skills: [
                'AWS Services',
                'Docker',
                'Git/Github',
                'Linux',
                'Containerization',
            ],
        },
        {
            title: 'Databases & Search',
            icon: <FaDatabase />,
            skills: [
                'SQL',
                'Postgres',
                'Elastic Search',
                'Database Management',
                'Data Processing',
            ],
        },
    ];

    const experiences = [
        {
            position: 'Trainee Engineer',
            company: 'Impressico Business Solutions',
            duration: 'January 2023 – Present',
            location: 'Noida, India',
            responsibilities: [
                'Developed expertise in various frameworks such as Django, Flask, and ReactJS alongside GenAI as well as ML and AI technologies',
                'Worked on RAG Application using advanced natural language processing techniques',
                'Gained hands-on experience with AWS, Docker, and SQL for cloud-based deployments',
                'Implemented end-to-end development from conceptualization to deployment with focus on user-centric solutions',
            ],
        },
        {
            position: 'Python Developer (Internship)',
            company: 'Mobiloitte Technologies Pvt. Ltd',
            duration: 'February 2023 – July 2023',
            location: 'India',
            responsibilities: [
                'Developed applications using Python, Django, and Machine Learning',
                'Created and maintained database systems using SQL',
                'Designed user interfaces with HTML and Bootstrap',
                'Enhanced problem-solving skills and technical proficiency in Python frameworks',
            ],
        },
    ];

    const education = [
        {
            degree: 'B.Tech in Computer Science & Engineering',
            institution: 'Maharana Pratap Group Of Institutions',
            duration: '2019 – 2023',
            location: 'India',
            details: [
                'Graduated with 81.50% marks',
                'Focused on programming, algorithms, and software development',
                'Participated in technical competitions and coding challenges',
            ],
        },
        {
            degree: '12th Grade (CBSE)',
            institution: 'Durga Prasad Vidya Niketan',
            duration: '2017 – 2019',
            location: 'Kanpur, India',
            details: [
                'Achieved 83.60% marks',
                'Science stream with focus on Mathematics and Computer Science',
            ],
        },
        {
            degree: '10th Grade (CBSE)',
            institution: 'Durga Prasad Vidya Niketan',
            duration: '2015 – 2017',
            location: 'Kanpur, India',
            details: [
                'Achieved 9.10 CGPA out of 10',
            ],
        },
    ];

    const certifications = [
        {
            name: 'Python Certification',
            issuer: 'IIT Kanpur and Internshala',
            year: '2022',
            description: 'Professional certification in Python programming',
        },
        {
            name: 'Data Science and Machine Learning',
            issuer: 'GeeksforGeeks (GFG)',
            year: '2022',
            description: 'Comprehensive training in data science methodologies and machine learning algorithms',
        },
        {
            name: '5 Star Coder in C/C++',
            issuer: 'HackerRank',
            year: '2022',
            description: 'Achieved 5 Star rating in C/C++ programming challenges',
        },
        {
            name: '3 Star Coder',
            issuer: 'CodeChef',
            year: '2022',
            description: 'Achieved 3 Star rating in competitive programming contests',
        },
    ];
    
    const projects = [
        {
            name: 'RAG Application on Amazon Data',
            technologies: 'SELENIUM, BEAUTIFULSOUP, HUGGINGFACE MODEL, OPENAI, POSTGRES, STREAMLIT, FLASK, Docker',
            description: 'Built a RAG application by scraping Amazon data, handling CAPTCHAS, applying hybrid chunking for text processing, and using hybrid search for efficient retrieval and augmented generation over the dataset.',
            image: aiImg
        },
        {
            name: 'Disease Prediction System',
            technologies: 'Python, Django, Machine Learning, Healthcare, Web Development',
            description: 'Developed a machine learning-based disease prediction system that analyzes patient symptoms to predict potential health conditions. Implemented multiple ML algorithms for accurate diagnosis and built a user-friendly web interface for patient interactions.',
            image: mlImg,
        },
        {
            name: 'Crop Yield Prediction',
            description: 'Developed a regression model to predict crop yields based on various environmental and agricultural factors. This tool helps farmers optimize planting decisions and improve agricultural efficiency.',
            technologies: ['Python', 'Scikit-learn', 'Regression Models', 'Data Analysis', 'Agricultural Tech'],
            image: cyImg
        },
    ];

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="about-content">
                    <h1>About Me</h1>
                    <p className="about-intro">
                        I'm Adarsh Singh, a passionate Python Developer with expertise in Django, Flask, ReactJS, and 
                        pioneering in GenAI, ML, and AI. I excel at building robust web applications and implementing
                        cutting-edge machine learning solutions to solve complex problems.
                    </p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> ac659015@gmail.com</p>
                        <p><strong>Phone:</strong> +91-8127981682</p>
                        <p><strong>Location:</strong> Noida, Uttar Pradesh 201301</p>
                    </div>
                </div>
            </section>

            <section className="skills-section">
                <div className="section-title">
                    <h2>My Skills</h2>
                    <p>Technologies and tools I work with</p>
                </div>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            icon={skill.icon}
                            skills={skill.skills}
                        />
                    ))}
                </div>
            </section>

            <section className="experience-section">
                <div className="section-title">
                    <h2>Work Experience</h2>
                    <p>My professional journey</p>
                </div>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            position={exp.position}
                            company={exp.company}
                            duration={exp.duration}
                            location={exp.location}
                            responsibilities={exp.responsibilities}
                        />
                    ))}
                </div>
            </section>

            <section className="projects-section">
                <div className="section-title">
                    <h2>Projects</h2>
                    <p>Showcasing my technical skills and creativity</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className="project-content">
                                <h3>{project.name}</h3>
                                <p className="tech-stack"><strong>Technologies:</strong> {project.technologies}</p>
                                <p>{project.description}</p>
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="education-section">
                <div className="section-title">
                    <h2>Education & Certifications</h2>
                    <p>My academic background and professional development</p>
                </div>
                <div className="education-grid">
                    <div className="education-column">
                        <h3>Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="education-card">
                                <h4>{edu.degree}</h4>
                                <p className="institution">{edu.institution}</p>
                                <p className="duration">{edu.duration} | {edu.location}</p>
                                <ul>
                                    {edu.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="cert-column">
                        <h3>Certifications & Courses</h3>
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-card">
                                <h4>{cert.name}</h4>
                                <p className="issuer">{cert.issuer} | {cert.year}</p>
                                <p className="description">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="soft-skills-section">
                <div className="section-title">
                    <h2>Soft Skills</h2>
                    <p>Professional qualities that drive my work</p>
                </div>
                <div className="soft-skills-grid">
                    <div className="soft-skill">Problem-Solving</div>
                    <div className="soft-skill">Team Collaboration</div>
                    <div className="soft-skill">Communication</div>
                    <div className="soft-skill">Time Management</div>
                    <div className="soft-skill">Adaptability</div>
                    <div className="soft-skill">Critical Thinking</div>
                    <div className="soft-skill">Attention to Detail</div>
                    <div className="soft-skill">Flexibility</div>
                    <div className="soft-skill">Analytical Thinking</div>
                    <div className="soft-skill">Continuous Learning</div>
                    <div className="soft-skill">Initiative & Proactivity</div>
                    <div className="soft-skill">Technical Aptitude</div>
                </div>
            </section>
        </div>
    );
};

export default About;
