import React from "react";
import Square from "./Square";
import { useState } from "react";

const style = {
  borderRadius: "5px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>
      {squares.map((square, idx) => {
        return <Square squares={square} idx={idx} onClick={onClick} />;
      })}
    </div>
  );
};

export default Board;
