import { IoMdAdd } from "react-icons/io";
import { NavMobile } from "../components";
import { createDb } from "../../indexeddb/database";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  //TODO: create the database just once
  useEffect(() => {
    createDb();
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
        <div className="expense">
          <span className="icon">🍔</span>
          <p className="expense-title">Hola dieguito</p>
          <span className="expense-cost">89.78</span>
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
        <button className="add-button" onClick={onAddClick}>
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
};

// https://www.freecodecamp.org/news/how-to-create-an-animated-hamburger-menu-in-react/
