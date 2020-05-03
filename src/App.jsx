import React from "react";
import "./App.css";
import BarMenu from "./left-bar-menu/BarMenu";
import { Route, Switch } from "react-router-dom";
import Skills from "./Skills/Skills";
import Contacts from "./Contact/Contacts";
import ProjectsPage from "./Projects/Projects";
import PDF_CV from "./CV/PDF_CV";
import FirstScren from "./startScreen/FirstScren";

const App = (props) => {
  return (
    <div className="App">
      <BarMenu className="barMenu" />
      <Switch>
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/cv" component={PDF_CV} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contacts} />
        <Route path="/" exact component={FirstScren} />
      </Switch>
    </div>
  );
};

export default App;
