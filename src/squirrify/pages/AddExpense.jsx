import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import { getTodayDate } from "../../helpers";
import { addExpense } from "../../indexeddb/database";
import { BackHeader, EmojiPicker, Header, Title } from "../components";
import { titles } from "../../common";
import { getCaption } from "../services";

export const AddExpense = () => {
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    title: "",
    description: "",
    cost: '',
    date: getTodayDate(),
  });

  const { description, cost, date } = formValues;

  const onSaveClick = (e) => {
    e.preventDefault();
    addExpense(formValues);
    navigate("/");
  };

  return (
    <div className="container">
      <BackHeader title={getCaption(titles.editExpense)}/>
      <div className="edit-expense">
        <div className="box form-container">
          <Title title={'Add Expenses'}/>
          <form>
            <div className="input-box">
              <input              
                className="half-width"
                type="number"
                name="cost"
                id="cost"
                value={cost}
                onChange={handleInputChange}
                placeholder="total"
              />
            </div>
            <div className="input-box">
              <EmojiPicker />
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
                placeholder="description"
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
