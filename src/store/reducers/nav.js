import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    componentToScrollTo: null,
  },
  reducers: {
    scrollToComponent: (state, action) => {
      state.componentToScrollTo = action.payload;
    },
  },
});

export const { scrollToComponent } = navSlice.actions;
export default navSlice.reducer;
