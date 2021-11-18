import Button from "@mui/material/Button";

const ClearButton = (props) => {
  const clearStorageHandler = () => {
    localStorage.clear();
    props.dispatch({ type: "CLEAR_ALL_TODOS" });
  };

  return (
    <Button
      sx={{
        position: "absolute",
        top: "94%",
        right: "50%",
        transform: "translate(50%,-50%)",
      }}
      variant="contained"
      disableElevation
      onClick={() => clearStorageHandler()}
    >
      Clear todos
    </Button>
  );
};

export default ClearButton;
