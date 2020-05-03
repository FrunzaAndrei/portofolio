import React from "react";
import avatarImg from "../store/profilePhoto.png";
import { TiMediaPlay } from "react-icons/ti";
import { TiMediaPlayReverse } from "react-icons/ti";

export default function FirstScren(props) {
  const handleDisplayContent = () => {
    props.history.push("/projects");
  };

  return (
    <div className="startBackground">
      <div className="startScreen">
        <img src={avatarImg} alt="img" />
        <ul>
          <li>
            <p>
              Hi, my name is Andrei Frunză and at the moment I am a web
              developer in a small company in Timișoara. Briefly, I started
              learning code a year and a half ago and since then I improved
              myself a lot, but of course there's always room for more. I enjoy
              driving, which goes hand in hand with travelling, and also I'm
              keen on experiencing new things and discovering the world. The
              purpose of this portfolio is to practice both coding and English
              skills, and to display what experience and knowledge I've gained
              so far. Enjoy!
            </p>
          </li>
          <li>
            <TiMediaPlay />
            <button onClick={handleDisplayContent}>Continue</button>
            <TiMediaPlayReverse />
          </li>
        </ul>
      </div>
    </div>
  );
}
