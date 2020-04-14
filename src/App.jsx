import React, { Component } from "react";
import "./App.css";
import BarMenu from "./left-bar-menu/BarMenu";
import PdfFile from "./CV/PdfViewer";
import { Route } from "react-router-dom";
import Skills from "./Skills/Skills";
import Contacts from "./Contact/Contacts";
import ProjectsPage from "./Projects/Projects";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPdf: true,
      displayContacts: false,
      displayProjects: false,
      displaySkills: false
    };
  }
  render() {
    return (
      <div className="App">
        <BarMenu className="barMenu" />
        <Route
          path="/cv"
          render={() => (
            <div className="pdf-page">
              <PdfFile />
            </div>
          )}
        />
        <Route path="/skills" render={() => <Skills />} />
        <Route path="/projects" render={() => <ProjectsPage />} />
        <Route path="/contact" render={() => <Contacts />} />
      </div>
    );
  }
}
