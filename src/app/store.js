import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
//import userReducer from "../features/movieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    //banner: userReducer,
  },
});
