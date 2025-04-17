import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

// Import project images
import aiImg from '../assets/projects/RCS.jpg';
import chatbotImg from '../assets/projects/OApc.jpeg';
import djangoImg from '../assets/projects/kp.jpg';
import flaskImg from '../assets/projects/Smdp.jpeg';
import lambdaImg from '../assets/projects/Pw.jpeg';
import mlImg from '../assets/projects/dps.jpg';
import opensearchImg from '../assets/projects/lgs.jpg';
import cyImg from '../assets/projects/cyp.jpg';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const projectsData = [
            {
                id: 1,
                title: 'RAG Application on Amazon Data',
                description: 'Built a Retrieval Augmented Generation (RAG) application using Amazon product data. Implemented web scraping with Selenium and BeautifulSoup to extract product information, processed text using hybrid chunking, and developed a hybrid search system for efficient data retrieval and generation.',
                technologies: ['Selenium', 'BeautifulSoup', 'HuggingFace', 'OpenAI', 'PostgreSQL', 'Streamlit', 'Flask', 'Docker'],
                image: aiImg,
                githubLink: '',
                liveLink: '',
                category: 'ai',
            },
            {
                id: 2,
                title: 'Disease Prediction System',
                description: 'Developed a machine learning-based disease prediction system that analyzes patient symptoms to predict potential health conditions. Implemented multiple ML algorithms for accurate diagnosis and built a user-friendly web interface for patient and doctor interactions.',
                technologies: ['Python', 'Django', 'Machine Learning', 'Healthcare', 'Web Development'],
                image: mlImg,
                githubLink: 'https://github.com/Adarsh172002/Disease-Prediction-using-machine-learning',
                liveLink: '',
                category: 'ml',
            },
            {
                id: 3,
                title: 'Crop Yield Prediction',
                description: 'Developed a regression model to predict crop yields based on various environmental and agricultural factors. This tool helps farmers optimize planting decisions and improve agricultural efficiency.',
                technologies: ['Python', 'Scikit-learn', 'Regression Models', 'Data Analysis', 'Agricultural Tech'],
                image: cyImg,
                githubLink: 'https://github.com/Adarsh172002/CropYieldPredictionUsingRegressionModel',
                liveLink: '',
                category: 'ml',
            },
            {
                id: 4,
                title: 'OpenAI-Powered Chatbot',
                description: 'Created an intelligent conversational agent using OpenAI\'s language models. The chatbot provides interactive conversations through a user-friendly interface and supports both pre-trained and fine-tuned models on custom datasets.',
                technologies: ['Django', 'OpenAI API', 'Python', 'HTML/CSS', 'JavaScript'],
                image: chatbotImg,
                githubLink: 'https://github.com/Adarsh172002/OPEN-AI-CHATBOT',
                liveLink: '',
                category: 'ai',
            },
            {
                id: 5,
                title: 'Social-media Full Stack Project',
                description: 'Implemented a full-stack web application utilizing React.js for frontend and Django REST framework for backend services. The project demonstrates seamless integration between modern frontend and backend technologies.',
                technologies: ['React.js', 'Django REST', 'JavaScript', 'Python', 'Full Stack Development'],
                image: flaskImg,
                githubLink: 'https://github.com/Adarsh172002/React-Django-Project',
                liveLink: '',
                category: 'web',
            },
            {
                id: 6,
                title: 'Kids Planet - Educational Platform',
                description: 'Developed an interactive educational platform for children that provides learning resources, games, and activities. The platform focuses on making learning engaging and accessible for young users.',
                technologies: ['Web Development', 'UI/UX Design', 'Educational Tech', 'Interactive Content'],
                image: djangoImg,
                githubLink: 'https://github.com/Adarsh172002/Kids-Planet',
                liveLink: '',
                category: 'web',
            },
            {
                id: 7,
                title: 'Lyrics Generation System',
                description: 'Built an AI-powered lyrics generation system that creates original song lyrics based on user inputs like genre, mood, or theme. Implemented natural language processing techniques for creative text generation.',
                technologies: ['Python', 'Django', 'NLP', 'Text Generation', 'Web Development'],
                image: opensearchImg,
                githubLink: 'https://github.com/Adarsh172002/Lyrics-Generation',
                liveLink: '',
                category: 'ai',
            },
            {
                id: 8,
                title: 'Portfolio Website',
                description: 'Designed and developed a personal portfolio website showcasing my skills, experience, and projects. The responsive site features modern design principles and interactive elements.',
                technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive Design', 'Web Development'],
                image: lambdaImg,
                githubLink: '',
                liveLink: '',
                category: 'web',
            }
        ];

        setProjects(projectsData);
        setFilteredProjects(projectsData);
    }, []);

    const handleFilterChange = (newFilter) => {
        setIsAnimating(true);
        setFilter(newFilter);

        setTimeout(() => {
            if (newFilter === 'all') {
                setFilteredProjects(projects);
            } else {
                const filtered = projects.filter(project => project.category === newFilter);
                setFilteredProjects(filtered);
            }
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className="projects-page">
            <section className="projects-hero">
                <h1>My Projects</h1>
                <p>Explore my work in AI, Machine Learning, and Web Development</p>
            </section>

            <section className="projects-section">
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('ai')}
                    >
                        AI/GenAI
                    </button>
                    <button
                        className={`filter-btn ${filter === 'ml' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('ml')}
                    >
                        Machine Learning
                    </button>
                    <button
                        className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('web')}
                    >
                        Web Dev
                    </button>
                </div>

                <div className={`projects-grid ${isAnimating ? 'animating' : ''}`}>
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.image}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;