import { IoIosMore } from "react-icons/io";
import { getCaption } from "../services";
import { captions } from "../../common";

export const MoreButton = () => {
  return (
    <div className="more-btn">
      <IoIosMore className="icon" size={50} />
      <span>{getCaption(captions.more)}</span>
    </div>
  );
};
