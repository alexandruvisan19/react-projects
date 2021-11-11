import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import Square from "./Square";

const style = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [history, setHistory] = useState([new Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);

  let status;
  let winner = calculateWinner(history[stepNumber]);

  if (winner) {
    status = `${winner} won!`;
  } else {
    status = `It's ${xIsNext ? "X" : "O"} turn!`;
  }

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    if (squares[i] !== null || winner) {
      return;
    }
    squares[i] = xIsNext ? "X" : "0";
    setHistory([...timeInHistory, squares]);
    console.log(timeInHistory);
    setStepNumber(timeInHistory.length);
    setxIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setxIsNext(step % 2 === 0);
  };

  const renderMoves = () => {
    return history.map((step, move) => {
      const destination = move ? `Go to move #${move}` : `Go to start`;
      return (
        <li style={style} key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  };

  return (
    <div>
      <Board
        style={style}
        squares={history[stepNumber]}
        onClick={handleClick}
      />
      <p className="status">{status}</p>
      {renderMoves()}
    </div>
  );
};

export default Game;
