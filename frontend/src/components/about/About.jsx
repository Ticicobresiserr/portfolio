import React from 'react';
import "./about.css";
import imagenyo from '../../img/IMG_9823.jpg'

const About = () => {
  return (
    <section id="about">

      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src={imagenyo}
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            Hi, I'am Ticiana,
            an ambitious system engineer willing to innovate with ideas and developing projects.
          </p>
          <p className="a-desc">
            I'am looking for a company where I can apply my habilities while improving my profesional career.
            I'am capable of adapting to any circumstances of work and always give the best of me for any task.
            I considere myself as a proactive, creative, visionary, problem solver and a team player person with a lot of energy ready to put into new projects.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;
