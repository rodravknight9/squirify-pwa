import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import { getTodayDate } from "../../helpers";
import { addExpense } from "../../indexeddb/database";

export const AddExpense = () => {
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    title: "",
    description: "",
    cost: 0,
    date: getTodayDate(),
  });

  const { title, description, cost, date } = formValues;

  const onClickCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const onSaveClick = (e) => {
    e.preventDefault();
    navigate("/");
    console.log(formValues);
    addExpense(formValues);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form action="">
          <div className="title">
            <h3>Add Expense</h3>
          </div>
          <div className="input-box">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="cost">Cost</label>
            <input
              type="number"
              name="cost"
              id="cost"
              value={cost}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="cost">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-btns">
            <button className="cancel-btn" onClick={(e) => onClickCancel(e)}>
              Cancel
            </button>
            <button className="ok-btn" onClick={(e) => onSaveClick(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
