import React from "react";

const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = (props) => {
  return (
    <button onClick={props.onClick} style={style}>
      {props.value}
    </button>
  );
};

export default Square;
