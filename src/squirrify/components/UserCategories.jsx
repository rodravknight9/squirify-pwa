import { Title } from "./Title";
import { defaultCategoriesArray } from "../../helpers/defaultCategories";
import { Category } from "./Category";
import { AddButton } from "./AddButton";
import { getCaption } from "../services";
import { titles } from "../../common";
import { useLanguage } from "../../hooks";

export const UserCategories = () => {
  const lang = useLanguage();

  return (
    <div className="box flex-column">
      <Title title={getCaption(titles.UserCategories, lang)} />
      <div className="categories-list">
        {defaultCategoriesArray.map((category, key) => (
          <div className="option" key={key}>
            <Category
              emojiName={category.emoji}
              size={50}
              categoryName={category.name}
            />
          </div>
        ))}
        <AddButton />
      </div>
    </div>
  );
};
