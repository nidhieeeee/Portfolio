import React, { useState } from "react";
import "./RightTop.css";
import { MoveUpRight } from "lucide-react";

function RightTop() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const projects = [
        {
            name: "CareerPath",
            image: "/careerpath.png",
        },
        {
            name: "LushBites",
            image: "/lushbites.png",
        },
        {
            name: "TravelGo",
            image: "https://i.ibb.co/9Yb4wzk/Screenshot-2025-01-23-134536.png",
        },
        {
            name: "GoodFood",
            image: "https://i.ibb.co/WPBj2vp/Screenshot-2025-01-23-183942.png",
        },
        // {
        //     name: "Nidhi Academy",
        //     image: "https://i.ibb.co/DK4DfB9/Screenshot-2025-01-23-185147.png",
        // },
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index); 
    };
    return (
            <div className="right-top-container">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-item"
                        onMouseEnter={() => handleMouseEnter(index)}
                    >
                        <div className="right-top-text">

                            <div className="right-top-link"><p
                            href={project.link}
                            target="_blank"
                            className="project-link"
                        >
                            {project.name}
                            </p></div>
                            <div className="right-top-svg">
                            <MoveUpRight />
                            </div>
                        </div>
                        
                            
                        
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
    );
}

export default RightTop;

