import React, { useState } from "react";
import GreenCheckIcon from "./Icons/GreenCheckIcon";
import EmptyCheckIcon from "./Icons/EmptyCheckIcon";

const ToDos = (props) => {
  const [check, setCheck] = useState(true);

  const toggleIconHandler = (e) => {
    e.preventDefault();
    console.log(check);
    setCheck(!check);
    if (check) {
      props.countCheck(
        document.getElementsByClassName("todo-checked").length + 1
      );
    } else if (!check) {
      props.countCheck(
        document.getElementsByClassName("todo-checked").length - 1
      );
    }
  };

  return (
    <div className="todo-container">
      <div onClick={toggleIconHandler} className="todo">
        <li className={check ? `todo-unchecked` : `todo-checked`}>
          {check ? <EmptyCheckIcon /> : <GreenCheckIcon />}
          {props.value}
        </li>
      </div>
      <button onClick={props.delete} className="delete">
        delete
      </button>
    </div>
  );
};

export default ToDos;
