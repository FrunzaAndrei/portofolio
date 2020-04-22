import React from "react";
import "./style.css";
import projects from "../store/myProjects";
import Project from "./Project";

function ProjectsPage() {
  return (
    <div className="project-page">
     <div className="project-area">
       {projects.map((item, index) => (
        <Project project={item} key={index} />
      ))}
     </div>
    </div>
  );
}

export default ProjectsPage;
