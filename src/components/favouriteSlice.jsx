import { createSlice } from "@reduxjs/toolkit";
import { getFromFavourites, setFavourites } from "../hooks/localStorage";

export const favouriteSlice = createSlice({
  name: "favouriteSlice",
  initialState: getFromFavourites() || [],
  reducers: {
    addFavourite: (state, action) => {
      state.push(action.payload);
      setFavourites(state);
    },
    removeFavourite: (state, action) => {
      const updatedState = state.filter((job) => job.id !== action.payload.id);
      setFavourites(updatedState);
      return updatedState;
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
