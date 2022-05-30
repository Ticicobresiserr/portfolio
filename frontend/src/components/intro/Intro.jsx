import React from 'react';
import "./intro.css";
import pdf from "../../cv/CV_Ticiana_Cobresi.pdf"

const Intro = () => {
  return (
    <section id="home">
      <div className="i">
        <div className="i-left">
          <div className="i2">
            <div className="i-left-wrapper">
              <h2 className="texto">Hi, I'm Ticiana<br /> A System Engineer</h2>

              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">React js</div>
                  <div className="i-title-item">Node js</div>
                  <div className="i-title-item">Javascript</div>
                  <div className="i-title-item">Web Developer</div>
                  <div className="i-title-item">Python 3</div>
                  <div className="i-title-item">C ++</div>
                </div>
              </div>

              <p className="i-desc">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services and
                online stores.
              </p>
              <div className="divCv">
                <a href={pdf} download="CV_Ticiana_Cobresi.pdf" className="cv">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
