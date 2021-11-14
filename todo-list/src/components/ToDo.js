import React, { useState } from "react";
import ToDos from "./ToDos";
import Input from "./Input";

const ToDo = (props) => {
  const [todos, setTodos] = useState([]);

  const handler = (i) => {
    setTodos(todos.filter((el) => el !== todos[i]));
  };

  return (
    <div>
      <h1>Add a Todo</h1>
      <Input setTodos={setTodos} />
      <ul>
        {todos
          .map((todo, i) => (
            <ToDos onClick={() => handler(i)} key={i} value={todo} />
          ))
          .reverse()}
      </ul>
      {todos.length >= 2 && (
        <button onClick={() => setTodos([])} type="button" className="clear">
          clear all
        </button>
      )}
    </div>
  );
};

export default ToDo;
