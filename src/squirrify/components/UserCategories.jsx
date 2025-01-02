import { Title } from "./Title";
import { defaultCategoriesArray } from "../../helpers/defaultCategories";
import { Category } from "./Category";
import { AddButton } from "./AddButton";

export const UserCategories = () => {
  return (
    <div className="box flex-column">
      <Title title={"User categories"} />
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
