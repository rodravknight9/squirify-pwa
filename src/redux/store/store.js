import { configureStore } from "@reduxjs/toolkit";
import { MainPageReducer } from "../slices";

export default configureStore({
  reducer: {
    mainPage: MainPageReducer,
  },
});
