import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {argumentSlice} from "./slices/argumentSlice";
import {dotsSlice} from "./slices/dotsSlice";
import {resultSlice} from "./slices/resultSlice";
import {errorSlice} from "./slices/errorSlice";


export const store = configureStore({
    reducer: {
        argument : argumentSlice.reducer,
        dots : dotsSlice.reducer,
        result : resultSlice.reducer,
        error : errorSlice.reducer
    },
})