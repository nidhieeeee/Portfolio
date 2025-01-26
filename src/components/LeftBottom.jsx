import React from "react";
import { CircleDashed } from 'lucide-react';
import "./LeftBottom.css";

function LeftBottom() {
    return (
        <div className="left-bottom-container">
            <div className="left-bottom-svg"><CircleDashed color="rgba(255, 85, 113, 0.788)" size={40} /></div>
            <div className="left-bottom-text">
                <p>Nidhi Mehta is a dedicated web developer, known for creating responsive and user-focused web applications. She combines technical proficiency with a flair for innovation to build impactful digital experiences.</p>
            </div>

        </div>
    );
}
export default LeftBottom;