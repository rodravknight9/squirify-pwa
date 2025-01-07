import { languages } from "../../../common";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../../redux/slices";

export const SelectLanguageModal = ({ onCloseModal }) => {
  const dispatch = useDispatch();

  const onClickOption = (key) => {
    dispatch(setLanguage(key));
    onCloseModal();
  };

  return (
    <div className="language-modal">
      {languages.map((lang, i) => (
        <div
          className="language-option"
          key={i}
          onClick={() => onClickOption(lang.key)}
        >
          {/* TODO: need to translate this one as well */}
          <p>{lang.name}</p>
        </div>
      ))}
    </div>
  );
};
