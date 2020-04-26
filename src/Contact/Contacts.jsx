/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaPhoneSquareAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import background from "../store/background.jpg";
import "./style.css";

function Contacts() {
  return (
    <>
      <img
        src={background}
        alt="contact page"
        className="background-contact-page"
      />
      <div className="contact-content">
        <h3 className="contact-title">Contact me:</h3>
        <ul>
          <li>
            <FaPhoneSquareAlt /> <a href="tel:000 000 0000"> 000 000 0000</a>
          </li>
          <li>
            <GrMail />{" "}
            <a href="mailto:frunza.andrei.daniel@gmail.com">
              frunza.andrei.daniel@gmail.com
            </a>
          </li>
          <li>
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/andrei-daniel-frunza-619b00184"
              target="_blank"
            >
              Linkedin Profile
            </a>
          </li>
          <li>
            <FaGithub />{" "}
            <a href="https://github.com/FrunzaAndrei" target="_blank">
              Github Profile
            </a>
          </li>
          {/* <li>
            <a>
              Call me <FaPhoneSquareAlt />
            </a>
            <a>
              Send me <GrMail />{" "}
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Contacts;
