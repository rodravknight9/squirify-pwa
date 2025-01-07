export const getCaption = (caption, language = "en", isTitle = true) => {
  if (isTitle) {
    return capitalizeFirstLetter(caption[language]);
  }
  return caption[language];
};

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
