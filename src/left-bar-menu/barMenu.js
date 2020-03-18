import React from "react";
import photo from "./../media/profilePhoto.png";
import "./style.css";
import { Link } from "react-router-dom";

function BarMenu(props) {
  return (
    <div className="main-barMenu">
      <div className="avatar-barMenu">
        <img src={photo} className="image-profile" />
        <div>
          <p className="name-profile">Frunza Andrei-Daniel</p>
          <p className="age-profile">Age : 23</p>
          <p className="ocupation-profile">Front-End Developer</p>
        </div>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/cv"> CV </Link>
        </li>
        <li>
          <Link to="/skills"> Skills </Link>{" "}
        </li>
        <li>
          <Link to="/projects"> Projects </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  );
}

export default BarMenu;
