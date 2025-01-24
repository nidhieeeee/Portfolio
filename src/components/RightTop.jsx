import React, { useState } from "react";
import "./RightTop.css";
import { MoveUpRight } from "lucide-react";

function RightTop() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const projects = [
        {
            name: "TravelGo",
            link: "https://nidhieeeee.github.io/TravelGo/",
            image: "https://i.ibb.co/9Yb4wzk/Screenshot-2025-01-23-134536.png",
        },
        {
            name: "PokeSearch",
            link: "https://nidhieeeee.github.io/PokeSearch/",
            image: "https://i.ibb.co/WP3TjkF/Screenshot-2025-01-23-221808.png",
        },
        {
            name: "GoodFood",
            link: "https://nidhieeeee.github.io/GoodFood_landing_page/",
            image: "https://i.ibb.co/WPBj2vp/Screenshot-2025-01-23-183942.png",
        },
        {
            name: "Nidhi Academy",
            link: "https://nidhi-academy.vercel.app/",
            image: "https://i.ibb.co/DK4DfB9/Screenshot-2025-01-23-185147.png",
        },
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index); 
    };
    return (
        <div className="right-top-container">
            <div className="project-names">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-item"
                        onMouseEnter={() => handleMouseEnter(index)}
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            className="project-link"
                        >
                            {project.name}
                            <MoveUpRight />
                        </a>
                        <div
                            className={`project-img ${
                                hoveredIndex === index ? "show" : "hide"
                            }`}
                        >
                            <img
                                src={project.image}
                                alt={`${project.name}-preview`}
                            />
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RightTop;

