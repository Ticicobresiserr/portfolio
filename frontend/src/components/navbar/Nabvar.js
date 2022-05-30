import React from 'react';
import "./nabvar.css";

const Nabvar = () => {
    return (
        < div className="nvgradient" >
            <ul className="ulclass">
                <li><a href="#home" className="link">Home</a></li>
                <li><a href="#projects" className="link">Projects</a></li>
                <li><a href="#about" className="link">About</a></li>
                <li><a href="#contact" className="link">Contact</a></li>
            </ul>
        </div >
    );
};

export default Nabvar;
