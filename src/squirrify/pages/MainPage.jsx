import { createDb, getExpenses2 } from "../../indexeddb/database";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { TotalBanner } from "../components/TotalBanner";
import { Filter } from "../components/Filter";
import { ExpensesList } from "../components/ExpensesList";
import { Toolbar } from "../components/Toolbar";

export const MainPage = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      try {
        await createDb();

        const expensesPromise = getExpenses2();
        const expenses = await expensesPromise;
        setExpenses(expenses);
      } catch (error) {
        console.error("Error initializing data:", error);
      }
    };

    initialize();
  }, []);

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
