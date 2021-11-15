import { BsCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const EmptyCheckIcon = (props) => {
  return (
    <IconContext.Provider value={{ color: "lightgray", size: "17px" }}>
      <div onClick={props.onClick} className="check-icon">
        <BsCircleFill />
      </div>
    </IconContext.Provider>
  );
};

export default EmptyCheckIcon;
