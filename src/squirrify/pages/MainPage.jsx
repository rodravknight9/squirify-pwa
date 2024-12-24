import { createDb, getExpenses2 } from "../../indexeddb/database";
import { useEffect, useState } from "react";
import { calculateTotal } from "../services";
import { Header } from "../components/Header";
import { TotalBanner } from "../components/TotalBanner";
import { Filter } from "../components/Filter";
import { ExpensesList } from "../components/ExpensesList";
import { Toolbar } from "../components/Toolbar";

export const MainPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    createDb();

    const initialize = async () => {
      const exp = await getExpenses2();
      setExpenses(exp);

      const tol = await calculateTotal(exp);
      setTotal(tol);
    };

    initialize();
  }, [total]);

  return (
    <>
      <div className="container">
        <Header />
        <div className="header">
          <TotalBanner total={total} />
          <Filter />
        </div>
        <ExpensesList expenses={expenses} />
        <Toolbar />
      </div>
    </>
  );
};
