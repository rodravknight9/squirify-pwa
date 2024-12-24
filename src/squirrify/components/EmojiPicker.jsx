import { Category } from "./Category";
import { MoreButton } from "./MoreButton";
import { defaultCategoriesArray } from "../../helpers/defaultCategories";

export const EmojiPicker = ({ onCategoryChange, selectedCategory }) => {
  //TODO improve the selection based by the user preferences
  const defCategories = defaultCategoriesArray.slice(0, 3);

  const onClickCategory = (value) => {
    onCategoryChange(value);
  };

  return (
    <div className="emoji-picker">
      {defCategories.map((cat, i) => (
        <div
          key={i}
          className={`emoji-option ${
            cat.uuid === selectedCategory ? "selected" : ""
          }`}
          onClick={() => onClickCategory(cat.uuid)}
        >
          <Category emojiName={cat.emoji} size={40} categoryName={cat.name} />
        </div>
      ))}
      <div className="emoji-option">
        <MoreButton />
      </div>
    </div>
  );
};
