export const getCaption = (caption, isTitle = true) => {
  //TODO: user needs a table for the language settings
  const userLanguage = "es";
  if (isTitle) {
    return capitalizeFirstLetter(caption[userLanguage]);
  }
  return caption[userLanguage];
};

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
