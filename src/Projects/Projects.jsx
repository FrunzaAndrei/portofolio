import React from "react";
import "./style.css";
import projects from "../store/myProjects";
import ProjectMD from "./ProjectMD";

function ProjectsPage() {
  return (
    <div className="project-page">
      <h1>My Projects</h1>
     <div className="project-area">
      {projects.map((item, index) => (
        <ProjectMD project={item} key={index} />
      ))}
     </div>
    </div>
  );
}

export default ProjectsPage;
