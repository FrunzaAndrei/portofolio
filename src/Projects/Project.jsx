import React from "react";
import Slider from "./Carousel";

function Project(props) {
  const showCode = () => {
    let win = window.open(props.project.github, "_blank");
    win.focus();
  };
  const playIt = () => {
    let win = window.open(props.project.tryIt, "_blank");
    win.focus();
  };

  return (
    <div className="projectArea">
      <div className="imageProject">
        <Slider image={props.project.image} />
      </div>

      <div className="titleProject">
        <h4>{props.project.title}</h4>
      </div>

      <div className="descriptionProject">
        <ol>
          {props.project.description.map((item, id) => (
            <li key={id} variant="body2" component="p">
              - {item}
            </li>
          ))}
        </ol>
      </div>

      <div className="actionProject">
        <button onClick={showCode}>Code</button>
        <button onClick={playIt}>Try it</button>
      </div>
    </div>
  );
}

export default Project;
