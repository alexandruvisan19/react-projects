import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import styled from "styled-components";

const List = styled.li`
  display: flex;
  padding: 10px 5px;
  align-items: center;
  border-bottom: 1px solid #a2a2a29e;
`;

const ToDo = styled.span`
  flex-grow: 1;
`;

const Todo = (props) => {
  const { id, todo, completed } = props.values;
  return (
    <List>
      <ToDo
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "#a2a2a29e" : "black",
        }}
      >
        {todo}
      </ToDo>
      {completed ? (
        <CheckBoxIcon
          sx={{
            cursor: "pointer",
            color: "#a2a2a29e",
          }}
          onClick={() =>
            props.dispatch({
              type: "COMPLETE_TODO",
              id: id,
              zIndex: "1000",
            })
          }
        />
      ) : (
        <CheckBoxOutlineBlankIcon
          sx={{
            cursor: "pointer",
            color: "#c4c4c4",
            zIndex: "1000",
          }}
          onClick={() =>
            props.dispatch({
              type: "COMPLETE_TODO",
              id: id,
            })
          }
        />
      )}
      <DeleteForeverRoundedIcon
        sx={{ cursor: "pointer" }}
        color="error"
        onClick={() =>
          props.dispatch({
            type: "DELETE_TODO",
            id: id,
          })
        }
      />
    </List>
  );
};

export default Todo;
