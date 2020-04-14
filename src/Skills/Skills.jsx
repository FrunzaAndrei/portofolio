import React from "react";
import "./style.css";
import tileData from "../store/titleData";

function Skills() {
  return (
    <div className="bodySkills">
      <div className="wrapper">
        {tileData.map((tile,id) => (
          <img key={id} src={tile.img} alt={tile.title} className="imageIMG"/>
        ))}
      </div>
    </div>
  );
}

export default Skills;
