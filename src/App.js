import React from "react";
import "./App.css";
import Qwe from "./Sidebar/Qwe";
import Navbar from "./Sidebar/Navbar";
import Page from "./Sidebar/Page";

function App() {
  return (
    <div className="wrapper">
      <Qwe />
      <Page />
    </div>
  );
}

export default App;
