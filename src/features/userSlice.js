import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  banner: null,
  movie: null,
  list: null,
  allMovies: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state = initialState;
    },
    movieBanner: (state, action) => {
      state.banner = action.payload;
    },
    movieDetails: (state, action) => {
      state.movie = action.payload;
    },
    myList: (state, action) => {
      state.list = action.payload;
    },
    // trendingMovie: (state, action) => {
    //   state.trending = action.payload;
    // },
    // movies: (state, action) => {
    //   switch (action.type) {
    //     case "trending": {
    //       return (state.trending = action.payload);
    //     }
    //   }
    // },
  },
});

export const { login, logout, movieDetails, movieBanner, myList } =
  userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectMovie = (state) => state.user.movie;

export default userSlice.reducer;
