import React from 'react';
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context/context";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_296blnt",
        "template_4fki4vr",
        formRef.current,
        "user_GTMYFm4STIAE0NyXQElbK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="c">
        {/* <div className="c-bg"></div> */}
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +54 9 3804 358137
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                tici.cobresi21@gmail.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                Córdoba- La Rioja, Argentina
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{ backgroundColor: darkMode && "#333", margin: '5px', color: darkMode && "white", width: "70%" }} type="text" placeholder="Name" name="user_name" />
              <input style={{ backgroundColor: darkMode && "#333", margin: '5px', color: darkMode && "white", width: "70%" }} type="text" placeholder="Subject" name="user_subject" />
              <input style={{ backgroundColor: darkMode && "#333", margin: '5px', color: darkMode && "white", width: "70%" }} type="text" placeholder="Email" name="user_email" />
              <textarea className="mesage" style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} rows="10" placeholder="Message" name="message" />
              <button className="botonsubmit">Submit</button>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
