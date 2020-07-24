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
    matched: false,
  };

  reveal = (e) => {
    this.setState({
      styleP: { ...this.state.styleP, backgroundColor: "transparent" },
    });
    this.setState({ styleImg: { ...this.state.styleImg, opacity: 1 } });
    console.log(e.target.style.backgroundColor);
  };

  hide = () => {
    this.setState({
      styleP: { ...this.state.styleP, backgroundColor: "#1476d8" },
    });
    this.setState({ styleImg: { ...this.state.styleImg, opacity: 0 } });
  };

  tileHover = () => {
    if (this.state.styleP.backgroundColor === "transparent") {
      return;
    } else {
      this.setState({
        styleP: { ...this.state.styleP, backgroundColor: "#3a8cde" },
      });
    }
  };

  tileHoverOut = () => {
    if (this.state.styleP.backgroundColor === "transparent") {
      return;
    } else {
      this.setState({
        styleP: { ...this.state.styleP, backgroundColor: "#1476d8" },
      });
    }
  };

  render() {
    return (
      <p
        style={this.state.styleP}
        onClick={
          this.state.styleP.backgroundColor !== "transparent"
            ? this.reveal
            : this.hide
        }
        onMouseEnter={this.tileHover}
        onMouseLeave={this.tileHoverOut}
      >
        <img alt="" style={this.state.styleImg} src={this.props.imgsource} />
      </p>
    );
  }
}

export default Radium(Tile);
