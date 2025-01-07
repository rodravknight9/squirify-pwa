import { configureStore } from "@reduxjs/toolkit";
import { MainPageReducer, SettingsReducer } from "../slices";

export default configureStore({
  reducer: {
    mainPage: MainPageReducer,
    settings: SettingsReducer,
  },
});
