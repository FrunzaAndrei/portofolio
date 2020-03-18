import React, { Component } from "react";
import "./App.css";
import BarMenu from "./left-bar-menu/barMenu";
import PdfFile from "./CV/pdfViewer";
import { Route } from "react-router-dom";
import Skills from "./Skills/skills";
import Projects from "./Projects/projects";
import Contacts from "./Contact/contacts";

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
        <Route path="/projects" render={() => <Projects />} />
        <Route path="/contact" render={() => <Contacts />} />
      </div>
    );
  }
}
