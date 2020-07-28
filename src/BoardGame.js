import React, { Component, useState } from "react";
import classes from "./BoardGame.module.css";
import Tile from "./Tile";
import images from "./imagelist";

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
const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
shuffle(numArray);

export default function BoardGame() {
  const [count, setCount] = useState(0);

  function adder() {
    setCount((prev) => {
      return prev + 1;
    });
    console.log(count);
  }

  return (
    <div className={classes.BoardGame}>
      {numArray.map((el) => {
        return (
          <div key={el.toString()} onClick={adder}>
            <Tile imgsource={images.source[el]} />
          </div>
        );
      })}
    </div>
  );
}
