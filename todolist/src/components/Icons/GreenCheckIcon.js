import { AiFillCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const GreenCheckIcon = () => {
  return (
    <IconContext.Provider value={{ color: "rgb(0, 218, 0)", size: "20px" }}>
      <div className="check-icon">
        <AiFillCheckCircle />
      </div>
    </IconContext.Provider>
  );
};

export default GreenCheckIcon;
