import React from "react";
import { languages } from "../../../common";

export const SelectLanguageModal = () => {
  console.log("render ");

  return (
    <div className="language-modal">
      {languages.map((lang, i) => (
        <div className="language-option" key={i}>
          <p>{lang}</p>
        </div>
      ))}
    </div>
  );
};
