import React, { Component } from "react";
import classes from "./BoardGame.module.css";
import Tile from "./Tile";
import images from "./imagelist";
import Radium from "radium";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
const numArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
shuffle(numArray);

class BoardGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matched: false,
    };
  }

  componentDidUpdate() {
    console.log(this.state.matched);
  }

  render() {
    const renderedTile = numArray.map((el) => {
      return (
        <div key={Math.random() * 100}>
          <Tile imgsource={images.source[el]} />
        </div>
      );
    });

    return <div className={classes.BoardGame}>{renderedTile}</div>;
  }
}

export default BoardGame;
