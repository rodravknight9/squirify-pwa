import { Route, Routes } from "react-router-dom";
import { AddCategory, AddExpense, MainPage } from "../pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/*" element={<MainPage />} /> */}
      <Route path="/add-expense" element={<AddExpense />} />
      <Route path="/add-category" element={<AddCategory />} />
    </Routes>
  );
};
