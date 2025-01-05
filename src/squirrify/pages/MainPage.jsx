import { createDb, getByDate } from "../../indexeddb/database";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { TotalBanner } from "../components/TotalBanner";
import { Filter } from "../components/Filter";
import { ExpensesList } from "../components/ExpensesList";
import { Toolbar } from "../components/Toolbar";
import { calculateTotal } from "../services";
import { useDispatch } from "react-redux";
import { setTotal } from "../../redux/slices";
import { useSelector } from "react-redux";

export const MainPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.mainPage.filterOption);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      try {
        await createDb();
        const exp = await getByDate(filter);
        const tol = await calculateTotal(exp);
        dispatch(setTotal(tol));
        setExpenses(exp);
      } catch (error) {
        console.error("Error initializing data:", error);
      }
    };

    initialize();
  }, [filter]);

  return (
    <div className="container">
      <Header />
      <div className="header">
        <TotalBanner />
        <Filter />
      </div>
      <ExpensesList expenses={expenses} />
      <Toolbar />
    </div>
  );
};
