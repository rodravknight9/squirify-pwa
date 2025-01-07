import { useNavigate } from "react-router-dom";
import { useForm, useLanguage } from "../../hooks";
import { getTodayDate } from "../../helpers";
import { addExpense } from "../../indexeddb/database";
import { BackHeader, EmojiPicker, Title } from "../components";
import { captions, titles } from "../../common";
import { getCaption } from "../services";
import { useState } from "react";

export const AddExpense = () => {
  const lang = useLanguage();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const [formValues, handleInputChange] = useForm({
    description: "",
    cost: "",
    date: getTodayDate(),
    categoryUuid: category,
  });

  const { description, cost, date } = formValues;

  const onSaveClick = (e) => {
    e.preventDefault();
    //TODO: improve this, should be autoamtic
    formValues.categoryUuid = category;
    addExpense(formValues);
    navigate("/");
  };

  return (
    <div className="container">
      <BackHeader title={getCaption(titles.editExpense, lang)} />
      <div className="edit-expense">
        <div className="box form-container">
          <Title title={getCaption(titles.editExpense, lang)} />
          <form>
            <div className="input-box">
              <input
                className="half-width"
                type="number"
                name="cost"
                id="cost"
                value={cost}
                onChange={handleInputChange}
                placeholder={getCaption(captions.total, lang)}
              />
            </div>
            {/* <p style={{ color: "black" }}>{category}</p> */}
            <div className="input-box">
              <EmojiPicker
                onCategoryChange={handleCategoryChange}
                selectedCategory={category}
              />
            </div>
            <div className="input-box half-width">
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={handleInputChange}
                placeholder={getCaption(captions.description, lang)}
              />
            </div>
            <div className="form-btns">
              <button className="ok-btn" onClick={(e) => onSaveClick(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
