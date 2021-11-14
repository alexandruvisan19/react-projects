import Square from "./Square";
import style from "./Board.module.css";
import { useState } from "react";
import { calculateWinner } from "./helper";

const Board = (props) => {
  const [square, setSquare] = useState(new Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState("X");

  const winner = calculateWinner(square);

  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  const resetGameHandler = () => {
    setSquare(new Array(9).fill(null));
  };

  const handleClick = (i) => {
    const squares = [...square];
    if (winner || squares[i] !== null) {
      console.log("you already clicked!");
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setSquare(squares);
    setxIsNext(!xIsNext);
  };

  if (!square.includes(null) && !winner) {
    return (
      <div>
        <p>Draw!</p>
        <button onClick={resetGameHandler}>Play Again!</button>
      </div>
    );
  }

  return (
    <div className={style.board}>
      {square.map((value, i) => (
        <Square key={i} value={value} onClick={() => handleClick(i)} />
      ))}
      <p>{status}</p>
      <p>{winner && <button onClick={resetGameHandler}>Reset Game</button>}</p>
    </div>
  );
};

export default Board;
