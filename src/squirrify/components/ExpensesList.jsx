import React from "react";
import { IoMdAdd } from "react-icons/io";
import { defaultCategoriesArray } from "../../helpers/defaultCategories";
import { Emoji } from "./Emoji";

export const ExpensesList = ({ expenses }) => {
  const localCategories = defaultCategoriesArray;

  const getCategory = (categoryUuid) => {
    return localCategories.find((obj) => obj.uuid === categoryUuid);
  };

  const getEmoji = () => {};

  return (
    <div className="list">
      <div className="expenses">
        {expenses.map((exp, i) => (
          <div className="expense" key={i}>
            <div style={{ padding: "2px 8px" }}>
              <Emoji
                emojiName={getCategory(exp.categoryUuid).emoji}
                size={30}
              />
            </div>
            <div className="desc-date">
              <span className="date">{exp.date}</span>
              <span className="icon">{exp.description}</span>
            </div>
            <span className="expense-cost">bs. {exp.cost}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
