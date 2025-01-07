import { useSelector } from "react-redux";

export const useText = (caption, isTitle = true) => {
  const language = useSelector((state) => state.settings.language);
  console.log(language);
  if (isTitle) {
    return capitalizeFirstLetter(caption[language]);
  }
  return caption[language];
};

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export const useLanguage = () => {
  return useSelector((state) => state.settings.language);
};
