import { IoIosMore } from "react-icons/io";
import { getCaption } from "../services";
import { captions } from "../../common";

export const AddButton = () => {
  return (
    <div className="more-btn">
      <IoIosMore className="icon" size={60} />
      <span style={{ color: "black" }}>{getCaption(captions.more)}</span>
    </div>
  );
};
