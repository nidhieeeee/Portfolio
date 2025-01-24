import React from 'react';
import './Projects.css';
import Navbar from "./Navbar.jsx"
import { Link , Github} from 'lucide-react';
const Projects = () => {
    const projects = [
        {
            name: "TravelGo",
            link: "https://nidhsrc/components/Projects.jsxieeeee.github.io/TravelGo/",
            description:"TravelGo is a straightforward travel website that provides essential tools and resources for planning trips. With a clean and user-friendly interface, it aims to make travel planning easy and enjoyable.",
            image: "https://i.ibb.co/9Yb4wzk/Screenshot-2025-01-23-134536.png",
            github:"https://github.com/nidhieeeee/TravelGo",
        },
        {
            name: "PokeSearch",
            link: "https://nidhieeeee.github.io/PokeSearch/",
            description:"PokeSearch is a simple and interactive web application built using HTML, CSS, and JavaScript. It utilizes FreeCodeCamp's Pokemon API to fetch and display details about Pokemon, including their strength, attack, speed, and HP. Users can search for Pokemon by either their name or ID.",
            image: "https://i.ibb.co/WP3TjkF/Screenshot-2025-01-23-221808.png",
            github:"https://github.com/nidhieeeee/PokeSearch",
        },
        {
            name: "GoodFood",
            link: "https://nidhieeeee.github.io/GoodFood_landing_page/",
            description:"The Good Foods Landing Page is designed to attract potential customers and provide an engaging overview of a fictional food delivery service. It features a modern design, interactive elements, and smooth user experience.",
            image: "https://i.ibb.co/WPBj2vp/Screenshot-2025-01-23-183942.png",
            github:"https://github.com/nidhieeeee/GoodFood_landing_page",
        },
        {
            name: "Nidhi Academy",
            link: "https://nidhi-academy.vercel.app/",
            description:"Nidhi academy affordable online learning opportunities for selected students, ensuring access to quality education at minimal cost. Upon course completion, participants will receive a certificate that adds value to their resume and enhances their career prospects.",
            image: "https://i.ibb.co/DK4DfB9/Screenshot-2025-01-23-185147.png",
            github:"https://github.com/nidhieeeee/practice-project-2",
        },
    ];

  return (
    <div className="projects-container">
        <Navbar />
      {projects.map((project, index) => (
        <div key={index} className="project-card">

          <div className='projects-image'>
          <img src={project.image} alt="project-image" className='project-image' />
          </div>

          <div className='des-demo'>
          <div className='project-des'>
            <p className='project-title'><strong>{project.name}</strong></p>
            <p className='project-description'>{project.description}</p>
            </div>
            <div className='demo'>
                <div><a href={project.github}><Github size={50} color='black' target='_blank' /></a></div>
            <div><a href={project.link}><Link size={50} color='black' target='_blank' /></a></div> 
            </div>
            </div>


        </div>
      ))}
    </div>
  );
};

export default Projects;

