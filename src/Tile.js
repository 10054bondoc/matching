import React, { Component } from "react";
import Radium from "radium";

class Tile extends Component {
  state = {
    styleImg: {
      objectFit: "cover",
      width: "10em",
      height: "10em",
      opacity: "0",
      pointerEvents: "none",
      borderRadius: "5px",
    },
    styleP: {
      backgroundColor: "#1476d8",
      width: "10em",
      height: "10em",
      cursor: "pointer",
      position: "relative",
      opacity: "1",
      margin: "1em",
      borderRadius: "5px",
      boxShadow: "0px 2px 3px #0a4580",
    },
  };
  reveal = (e) => {
    if (this.props.chosen) {
      if (e.target.style.backgroundColor === "rgb(58, 140, 222)") {
        e.target.style.backgroundColor = "transparent";
        e.target.children[0].style.opacity = 1;
      } else {
        this.hide(e);
      }
    }
  };

  hide = (e) => {
    e.target.children[0].style.opacity = 0;
    e.target.style.backgroundColor = "rgb(58, 140, 222)";
  };

  tileHover = (e) => {
    if (e.target.style.backgroundColor === "transparent") {
      return;
    } else {
      e.target.style.backgroundColor = "#3a8cde";
    }
  };

  tileHoverOut = (e) => {
    if (e.target.style.backgroundColor === "transparent") {
      return;
    } else {
      e.target.style.backgroundColor = "#1476d8";
    }
  };

  componentDidMount() {
    console.log("Hello from mounting");
  }

  componentDidUpdate() {
    console.log("Hello from update");
  }

  render() {
    return (
      <p
        style={this.state.styleP}
        onClick={this.reveal}
        onMouseEnter={this.tileHover}
        onMouseLeave={this.tileHoverOut}
      >
        <img alt="" style={this.state.styleImg} src={this.props.imgsource} />
      </p>
    );
  }
}

export default Radium(Tile);
