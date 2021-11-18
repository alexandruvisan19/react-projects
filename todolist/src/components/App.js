import AddTodoInput from "./AddTodoInput";
import ListOfTodos from "./ListOfTodos";
import ClearButton from "./ClearButton";
import { useReducer, useCallback } from "react";
import { useLocalStorage } from "react-use";
import Box from "@mui/material/Box";

const LOCAL_STORAGE_KEY = "todo-list";

const INITIAL_STATE = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, newTodo(action.todo)];
    case "COMPLETE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "CLEAR_ALL_TODOS":
      return INITIAL_STATE;
    default:
      throw new Error();
  }
};

const newTodo = (name) => {
  return { todo: name, completed: false, id: (Math.random() * 1000).toFixed() };
};

const usePersistReducer = () => {
  // grab saved value from `localStorage` and
  // a function to update it. if
  // no value is retrieved, use `INITIAL_STATE`
  const [savedState, saveState] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    INITIAL_STATE
  );

  // wrap `reducer` with a memoized function that
  // syncs the `newState` to `localStorage` before
  // returning `newState`. memoizing is important!
  const reducerLocalStorage = useCallback(
    (state, action) => {
      const newState = reducer(state, action);

      saveState(newState);

      return newState;
    },
    [saveState]
  );

  // use wrapped reducer and the saved value from
  // `localStorage` as params to `useReducer`.
  // this will return `[state, dispatch]`
  return useReducer(reducerLocalStorage, savedState);
};

const App = () => {
  const [todos, dispatch] = usePersistReducer();
  const getDataHandler = (todo) => {
    dispatch({ type: "ADD_TODO", todo: todo });
  };

  const completedTodos = todos.filter((value) => value.completed !== false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "480px",
        border: "2px solid #3d98ff",
        padding: "30px 45px 5px",
        borderRadius: "5px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
        },
        position: "relative",
        color: "black",
      }}
    >
      <AddTodoInput getTodoData={getDataHandler} />
      <div className="todoNum">
        {todos.length > 0 && completedTodos.length + "/" + todos.length}
      </div>
      <div style={{ overflow: "auto", height: "300px", listStyle: "none" }}>
        {todos.map((v) => (
          <ListOfTodos value={v} dispatch={dispatch} />
        ))}
      </div>
      {todos.length >= 3 && <ClearButton values={todos} dispatch={dispatch} />}
    </Box>
  );
};

export default App;
