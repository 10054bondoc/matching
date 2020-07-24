import React, { Component } from "react";
import Radium from "radium";

class Tile extends Component {
  render() {
    return <img alt="" src={this.props.imgsource} style={this.props.styling} />;
  }
}

export default Radium(Tile);
