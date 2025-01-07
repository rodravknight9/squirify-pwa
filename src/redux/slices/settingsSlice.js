import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "updateLanguage",
  initialState: {
    language: "en",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = settingsSlice.actions;
export const { reducer: SettingsReducer } = settingsSlice;
