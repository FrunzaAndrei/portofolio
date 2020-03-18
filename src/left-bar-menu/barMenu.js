import React from "react";
import photo from "./../media/profilePhoto.png";
import "./style.css";

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
        <li>CV</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default BarMenu;
