import { configureStore } from "@reduxjs/toolkit";
import { favouriteSlice } from "../components/favouriteSlice";

export const store=configureStore({
  reducer:{
    [favouriteSlice.name]:favouriteSlice.reducer
  }
})