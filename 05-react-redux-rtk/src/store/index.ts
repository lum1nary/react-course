import {configureStore} from "@reduxjs/toolkit";
import {reducer as waitersReducer } from "../features/waiters/store/reducer";

export const store = configureStore({
    reducer: {
        waiters: waitersReducer,
    },
});