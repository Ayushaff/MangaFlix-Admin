import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    header: "#ebfbff",
    body: "#CAE7F6",
    footer: "#003333",
    titleBar : "#DDDDDD",
    buttonColor : "#D2EDED",
    trendingManga : "#5C8374",
    headbar : "#BDE4E4",
  },
  mobile: "768px",
  darkmode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.colors.header = "#324B50";
      state.colors.body = "#092635";
      state.darkmode = true;
      state.colors.titleBar = "#222222";
      state.colors.buttonColor = "#122D2D";
      state.colors.headbar = "#1B4242";
    },
    setDefaultTheme(state) {
      state.colors.header = "#ebfbff";
      state.colors.body = "#CAE7F6";
      state.darkmode = false;
      state.colors.titleBar = "#DDDDDD";
      state.colors.buttonColor = "#D2EDED";
      state.colors.trendingManga = "#5C8374";
      state.colors.headbar = "#BDE4E4";
    },
  },
});

export const { setDarkTheme, setDefaultTheme } = themeSlice.actions;

export default themeSlice.reducer;
