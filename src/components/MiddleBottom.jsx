import React from "react";
import "./MiddleBottom.css";
import { MoveUpRight } from 'lucide-react';

function MiddleBottom(){
    return(
        <div className="middle-bottom-container">
<div className="middle-bottom-up">
    <div className="middle-bottom-text"><p>Have some questions?</p></div>
<div className="middle-bottom-svg"><MoveUpRight /></div>

</div>
<div className="middle-bottom-contact"><p>Contact Me</p></div>

        </div>
    );
}
export default MiddleBottom;