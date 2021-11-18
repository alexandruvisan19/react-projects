import Todo from "./Todo";

const ListOfTodos = (props) => {
  return (
    <Todo key={props.value.id} values={props.value} dispatch={props.dispatch} />
  );
};

export default ListOfTodos;
