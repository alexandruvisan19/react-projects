import React, { useState } from "react";
import ToDos from "./ToDos";
import Input from "./Input";

const ToDo = (props) => {
  const [todos, setTodos] = useState([]);
  const [countCheck, setCountCheck] = useState(0);
  const [check, setCheck] = useState(false);

  const addToDoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { name: todo, checked: check }];
    });
  };

  const checkOrNot = (boolean) => {
    setCheck(boolean);
  };

  console.log(todos);

  const handler = (i) => {
    setTodos(todos.filter((value) => value !== todos[i]));
    console.log(todos);
    if (document.querySelector("li").classList.contains("todo-checked")) {
      setCountCheck(countCheck - 1);
    }
  };

  const clearHandler = () => {
    setTodos([]);
    setCountCheck(0);
  };

  return (
    <div>
      <h1>Add a Todo</h1>
      <Input onAddTodos={addToDoHandler} />
      <div className="done-todos">
        {countCheck >= 0 && `${countCheck}/${todos.length}`}
      </div>
      <ul>
        {todos.map((todo, i) => (
          <ToDos
            countCheck={setCountCheck}
            delete={() => handler(i)}
            key={i}
            value={todo.name}
          />
        ))}
      </ul>
      {todos.length >= 2 && (
        <button onClick={clearHandler} type="button" className="clear">
          clear all
        </button>
      )}
    </div>
  );
};

export default ToDo;
