import { createSlice } from "@reduxjs/toolkit";
import { PurpleTheme } from "../../themes/purple";
import { DarkTheme } from "../../themes/dark";
import { DarkGreen } from "../../themes/darkGreen";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: PurpleTheme,
  },
  reducers: {
    setTheme: (state, action) => {
      const themeToAdd = action.payload;

      if (themeToAdd === "purple") {
        state.theme = PurpleTheme;
      } else if (themeToAdd === "dark") {
        state.theme = DarkTheme;
      } else {
        state.theme = DarkGreen;
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
