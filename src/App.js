import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BoardGame from "./BoardGame";
import Radium from "radium";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardGame />
      </div>
    );
  }
}

export default Radium(App);
