import React from "react";
import Slider from "./Carousel";

function Project(props) {
    console.log("project 1 :");
    console.log(props.project);
  return (
    <div className="project-area">
      <div style={{ width: "600px", height: "300px" }}>
        <Slider image={props.project.image}/>
      </div>
      <div className="projectDescription">
          <h1>{props.project.title}</h1>
          <ul>
              {props.project.description.map((item,id)=><li key={id}>
                - {item}
              </li>)}
              <li><a href={props.project.github} target="_blank">Click here for Code behind project!</a></li>
              <li><a href={props.project.tryIt} target="_blank">Try it!</a></li>
          </ul>
      </div>
    </div>
  );
}

export default Project;
