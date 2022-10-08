import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./PostsSlice";

export const Store = configureStore({
    reducer:{
        posts:postsReducer,
    }
})