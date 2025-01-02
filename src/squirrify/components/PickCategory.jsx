import React from "react";
import { defaultCategoriesArray } from "../../helpers/defaultCategories";
import { Category } from "./Category";

export const PickCategory = () => {
  return (
    <div className="emoji-picker more-emoji">
      {defaultCategoriesArray.map((cat, i) => (
        <div
          key={i}
          className="emoji-option"
          //   className={`emoji-option ${
          //     cat.uuid === selectedCategory ? "selected" : ""
          //   }`}
          //   onClick={() => onClickCategory(cat.uuid)}
        >
          <Category emojiName={cat.emoji} size={40} categoryName={cat.name} />
        </div>
      ))}
    </div>
  );
};
