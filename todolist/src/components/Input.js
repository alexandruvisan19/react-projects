import React from "react";
import { useState, useRef } from "react";

const Input = (props) => {
  const [todo, setTodo] = useState([]);
  const todoInputRef = useRef();

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTodo = todoInputRef.current.value;
    props.onAddTodos(enteredTodo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={todo} onChange={inputHandler} ref={todoInputRef} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Input;
