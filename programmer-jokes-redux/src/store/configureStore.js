import {configureStore } from "@reduxjs/toolkit";
import jokeReducer from "../reducers/jokeReducer";
import filterReducer from "../reducers/filterReducer";

const store = configureStore({
    reducer: {
        jokes: jokeReducer,
        filter: filterReducer
    }
});

export default store;