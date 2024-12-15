import { NavMobile } from "../components";

export const MainPage = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="nav-menu">
          <NavMobile />
        </div>

        <div className="total">
          <span className="number">12738</span>
          <span className="currency">Bs</span>
        </div>

        <div className="filter">
          <div className="options">
            <span className="selected">Today</span>
            <span>Month</span>
            <span>Year</span>
            <span>Custom</span>
          </div>
        </div>
      </div>

      <div className="list-of-expenses">
        <div className="expense">
          <span className="icon">🍔</span>
          <p className="expense-title">Burger king</p>
          <span className="expense-cost">32.67</span>
        </div>
        <div className="expense">
          <span className="icon">🍔</span>
          <p className="expense-title">Burger king</p>
          <span className="expense-cost">32.67</span>
        </div>
        <div className="expense">
          <span className="icon">🍔</span>
          <p className="expense-title">Burger king</p>
          <span className="expense-cost">32.67</span>
        </div>
      </div>

      <div className="toolbar">
        <button className="add-button">Add</button>
      </div>
    </div>
  );
};

// https://www.freecodecamp.org/news/how-to-create-an-animated-hamburger-menu-in-react/
