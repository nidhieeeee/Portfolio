import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate();
    function handleProjects(){
        navigate("/projects");
    }
    function handleHome(){
        navigate("/home");
    }
    function handleContact(){
        navigate("/contactus");
    }
    return (
        <div className="navbar-container">
            <div className="name">
                <p>
                    <i>Nidhi</i> <strong>Mehta</strong>
                </p>
            </div>
            
            <div className="list">
                <div className="burger-menu" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
                <ul className={isMenuOpen ? "show" : ""}>
                    <li onClick={handleHome}>HOME</li>
                    <li onClick={handleProjects}>PROJECTS</li>
                    <li onClick={handleContact}>CONTACT</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
