import React from "react";
import "./MiddleBottom.css";
import { MoveUpRight } from 'lucide-react';

function MiddleBottom(){
    return(
        <div className="middle-bottom-container">
<div className="questions">
    <p>Have some questions?</p>
    <MoveUpRight />
</div>
<p className="contact-me">Contact Me</p>
        </div>
    );
}
export default MiddleBottom;