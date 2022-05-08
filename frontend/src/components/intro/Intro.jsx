import React from 'react';
import "./intro.css";
// import Me from "../../img/me.png";
import imagenyo2 from '../../img/IMG_8316.jpg'

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

            </div>
            {/* <div className="i-right-wrapper">
            <div className="card-img">
              <div className="a-card-img">
                <img src={imagenyo2} alt="" className="a-img-intro" />
              </div>
            </div>
          </div> */}
            <a href='../../cv/CV.pdf' download className="cv">Download CV</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;
