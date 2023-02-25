import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  search: "",
  selectedMovie: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
    changeSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies, changeSearch, changeSelectedMovie } =
  authSlice.actions;

export default authSlice.reducer;
