import React from "react";
import "./style.css";
import Project from "./Project";
import projects from "../store/myProjects";

function ProjectsPage() {
  return (
    <div className="project-page">
      <h1>My Projects</h1>
      {projects.map((item, index) => (
        <Project project={item} key={index} />
      ))}
    </div>
  );
}

export default ProjectsPage;
