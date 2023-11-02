import {configureStore} from "@reduxjs/toolkit";
import {reducer as waitersReducer } from "../features/Waiters/store/reducer";

export const store = configureStore({
    reducer: {
        waiters: waitersReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch