import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import Square from "./Square";

const style = {
  width: "200px",
  margin: "20px auto",
};

const Game = (props) => {
  const [square, setSquare] = useState(new Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = (i) => {
    console.log(i);
    let squares = [...square];
    squares[i] = xIsNext ? "X" : "O";
    setSquare(squares);
    setxIsNext(!xIsNext);
  };

  return (
    <div style={style}>
      <Board squares={square} onClick={handleClick} />
    </div>
  );
};

export default Game;
