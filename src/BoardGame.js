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
    clickedImage: true,
  };

  componentDidUpdate() {
    console.log(this.state.clickedImage);
  }

  render() {
    const renderedTile = numArray.map((el) => {
      return (
        <div
          key={Math.random() * 100}
          onClick={() => this.setState({ ...this.state, clickedImage: true })} // hindi ko gets bakit once nagsetState ako hindi na magalawa yung Tile component??
        >
          <Tile
            imgsource={images.source[el]}
            revealed={this.state.revealed}
            chosen={this.state.clickedImage}
          />
        </div>
      );
    });

    return <div className={classes.BoardGame}>{renderedTile}</div>;
  }
}

export default Radium(BoardGame);
