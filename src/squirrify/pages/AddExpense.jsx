import { useNavigate } from "react-router-dom";

export const AddExpense = () => {
  const navigate = useNavigate();

  const onClickCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const onSaveClick = (e) => {
    e.preventDefault();
    navigate("/");
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
            <input type="text" name="title" id="title" />
          </div>
          <div className="input-box">
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
          </div>
          <div className="input-box">
            <label htmlFor="cost">Cost</label>
            <input type="number" name="cost" id="cost" />
          </div>
          <div className="input-box">
            <label htmlFor="cost">Date</label>
            <input type="date" name="date" id="date" />
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
