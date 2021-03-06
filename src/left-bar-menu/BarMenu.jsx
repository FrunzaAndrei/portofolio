import React from "react";
import avatar from "./../store/profilePhoto.png";
import "./style.css";
import { NavLink } from "react-router-dom";
import { FaRegIdBadge } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

function BarMenu(props) {
   const selected = {
    fontWeight: "bold",
    color: "#309eb7",
    letterSpacing: "1px",
  };
  return (
    <div className="main-barMenu">
      <div className="avatar-barMenu">
        <img src={avatar} className="image-profile" alt="profile"/>
        <div>
          <p className="name-profile">Frunza Andrei-Daniel</p>
          <p className="ocupation-profile">Front-End Developer</p>
        </div>
      </div>
      <ul className="nav-items">
        <li>
          <NavLink to={"/cv"} activeStyle={selected}>
            <FaRegIdBadge size="1.2em" />
           <span> &nbsp; CV </span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/skills`} activeStyle={selected}>
            <FiUserCheck size="1.2em" />
            <span>&nbsp; Skills</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/projects`} activeStyle={selected}>
            <FaBriefcase size="1.2em" />
            <span> &nbsp; Projects </span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/contact`} activeStyle={selected}>
            <MdPhone size="1.2em" />
            <span> &nbsp; Contact </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default BarMenu;
