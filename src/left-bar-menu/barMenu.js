import React from "react";
import photo from "./../media/profilePhoto.png";
import "./style.css";
import { NavLink } from "react-router-dom";

function BarMenu(props) {
  const age = new Date().getFullYear();
  const selected = {
    fontWeight: "bold",
    color: "#0F52BA",
    letterSpacing: "1px",
  };
  return (
    <div className="main-barMenu">
      <div className="avatar-barMenu">
        <img src={photo} className="image-profile" />
        <div>
          <p className="name-profile">Frunza Andrei-Daniel</p>
          <p className="age-profile">Age : {age - 1996}</p>
          <p className="ocupation-profile">Front-End Developer</p>
        </div>
      </div>
      <ul className="nav-items">
        <li>
          <NavLink to="/cv" activeStyle={selected}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeStyle={selected}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeStyle={selected}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={selected}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default BarMenu;
