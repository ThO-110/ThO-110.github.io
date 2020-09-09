import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";

import TopBar from "../components/TopBar";
import BodyContent from "../components/BodyContent";

function App() {
  return (
    <>
      <TopBar />
      <BodyContent />
      <AppBar />
    </>
  );
}

export default App;
