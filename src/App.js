import React from "react";
import "./App.css";
import BarMenu from "./left-bar-menu/barMenu";
import PdfFile from "./CV/pdfViewer";

function App() {
  return (
    <div className="App">
      <BarMenu className="barMenu" />
      <div className="pdf-page">
        <PdfFile />
      </div>
    </div>
  );
}

export default App;
