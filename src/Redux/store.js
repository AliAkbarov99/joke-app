import { configureStore } from "@reduxjs/toolkit";
import FavSlice from "./slice/FavSlice";
import jokeSlice from "./slice/jokeSlice";

export const store = configureStore({
    reducer:{
        favourite: FavSlice.reducer,
        joke: jokeSlice.reducer
    }
})