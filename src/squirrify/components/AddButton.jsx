import { IoIosMore } from "react-icons/io";
import { getCaption } from "../services";
import { captions } from "../../common";

export const AddButton = () => {
  return (
    <div className="more-btn" style={{ backgroundColor: "red" }}>
      <IoIosMore className="icon" size={60} />
      <span>{getCaption(captions.more)}</span>
    </div>
  );
};
