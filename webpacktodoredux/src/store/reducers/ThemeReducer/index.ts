import { createSlice } from "@reduxjs/toolkit";

interface ThemeType {
  theme: "dark" | "light";
}

const initialState: ThemeType = {
  theme: "dark"
};

const themeSlice = createSlice({
  initialState,
  name: "ThemeReducer",
  reducers: {
    changeTheme: (state) => {
      if (state.theme === "dark") {
        state.theme = "light";
      } else {
        state.theme = "dark";
      }
    }
  }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice;
