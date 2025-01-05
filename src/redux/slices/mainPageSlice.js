import { createSlice } from "@reduxjs/toolkit";

export const mainPageSlice = createSlice({
  name: "updateTotal",
  initialState: {
    total: 0,
    filterOption: "today",
  },
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setFilter: (state, action) => {
      state.filterOption = action.payload;
    },
  },
});

export const { setTotal, setFilter } = mainPageSlice.actions;
export const { reducer: MainPageReducer } = mainPageSlice;
