import React from "react";
import { useState } from "react";

const Input = (props) => {
  const [todo, setTodo] = useState([]);

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={todo} onChange={inputHandler} type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Input;
