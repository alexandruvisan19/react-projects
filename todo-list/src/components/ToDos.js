import React from "react";

const ToDos = (props) => {
  return (
    <div className="todo">
      <li>{props.value}</li>
      <button onClick={props.onClick} className="delete">
        delete
      </button>
    </div>
  );
};

export default ToDos;
