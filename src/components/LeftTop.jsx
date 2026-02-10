import React from "react";
import "./LeftTop.css";
import { Flower } from 'lucide-react';
function LeftTop(){
    return (
        <div className="left-top-container">
            <div className="left-top-svg">
                <div className="left-svg"></div>
                <div className="right-svg">
                <Flower size={120} strokeWidth="0.3" /></div>
                </div>
            <div className="left-top-text">
  <p> Web Developer <i>Crafting</i> Seamless Experiences. </p>
</div>

            
        </div>
    );
}
export default LeftTop;