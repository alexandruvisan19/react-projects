import { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

const Form = styled.form`
  margin-bottom: 25px;
`;

const AddTodoInput = (props) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.getTodoData(todo);
    setTodo("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <TextField
        sx={{ width: "100%" }}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        id="outlined-basic"
        label="Add To-Do"
        variant="outlined"
      ></TextField>
    </Form>
  );
};

export default AddTodoInput;
