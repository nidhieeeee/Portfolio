import React from "react";
import "./LeftTop.css";
import { Flower } from 'lucide-react';
function LeftTop(){
    return (
        <div className="left-top-container">
            <Flower height="150px" width="150px" strokeWidth="0.3" />
            <p> Software <i>Engineer</i>  with Front-End Developer </p>
        </div>
    );
}
export default LeftTop;