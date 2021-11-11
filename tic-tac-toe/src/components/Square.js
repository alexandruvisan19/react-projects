import React from "react";

const style = {
  background: "#fff",
  border: "1px solid #999",
  fontSize: "24px",
  fontWeight: "bold",
  lineHeight: "34px",
  marginRight: "-1px",
  marginTop: "-1px",
  padding: "0",
  textAlign: "center",
};

const Square = ({ squares, onClick, idx }) => {
  return (
    <button key={idx} style={style} onClick={() => onClick(idx)}>
      {squares}
    </button>
  );
};

export default Square;
