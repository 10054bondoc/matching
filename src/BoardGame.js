import React, { Component } from "react";
import classes from "./BoardGame.module.css";
import Tile from "./Tile";
import images from "./imagelist";
import Radium from "radium";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
const numArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
shuffle(numArray);

let firstClick;

class BoardGame extends Component {
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
    },
    choices: [],
  };

  reveal = (e) => {
    if (e.target.style.backgroundColor === "rgb(58, 140, 222)") {
      e.target.style.backgroundColor = "transparent";
      e.target.children[0].style.opacity = 1;
    } else {
      this.hide(e);
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

  render() {
    const renderedTile = numArray.map((el) => {
      return (
        <p
          key={Math.random() * 100}
          style={this.state.styleP}
          onClick={this.reveal}
          onMouseEnter={this.tileHover}
          onMouseLeave={this.tileHoverOut}
          onChange
        >
          <Tile styling={this.state.styleImg} imgsource={images.source[el]} />
        </p>
      );
    });

    return (
      <div className={classes.BoardGame} onClick={this.game}>
        {renderedTile}
      </div>
    );
  }
}

export default Radium(BoardGame);
