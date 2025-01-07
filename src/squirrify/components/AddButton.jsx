import { IoIosMore } from "react-icons/io";
import { getCaption } from "../services";
import { captions } from "../../common";
import { useLanguage } from "../../hooks";

export const AddButton = () => {
  const lang = useLanguage();

  return (
    <div className="more-btn">
      <IoIosMore className="icon" size={60} />
      <span style={{ color: "black" }}>{getCaption(captions.more, lang)}</span>
    </div>
  );
};
