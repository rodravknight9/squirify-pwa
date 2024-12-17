import { IoMdAdd } from "react-icons/io";
import { NavMobile } from "../components";
import { createDb, getExpenses2 } from "../../indexeddb/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    createDb();

    const initialize = async () => {
      const exp = await getExpenses2();
      setExpenses(exp);
    };

    initialize();
  }, []);

  const onAddClick = () => {
    navigate("add-expense");
  };

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
        {expenses.map((exp, i) => (
          <div className="expense" key={i}>
            <span className="icon">🍔</span>
            <p className="expense-title">{exp.title}</p>
            <span className="expense-cost">{exp.cost}</span>
          </div>
        ))}
      </div>

      <div className="toolbar">
        <button className="add-button" onClick={onAddClick}>
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
};

// https://www.freecodecamp.org/news/how-to-create-an-animated-hamburger-menu-in-react/
