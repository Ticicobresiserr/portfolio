import React from 'react';
import About from "../about/About";
import Contact from "../contact/Contact";
import Intro from "../intro/Intro";
import "./nabvar.css";

const Nabvar = () => {
    return (
        < div className="nvgradient" >
            <ul>
                <li><a href="#home" class="link">Home</a></li>
                <li><a href="#projects" class="link">Projects</a></li>
                <li><a href="#about" class="link">About</a></li>
                <li><a href="#contact" class="link">Contact</a></li>
            </ul>
        </div >
    );
};

export default Nabvar;
