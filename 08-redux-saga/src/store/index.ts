import {configureStore} from "@reduxjs/toolkit";
import {reducer as waitersReducer } from "../features/Waiters/store/reducer";
import { rootSaga } from "./saga";
import createSageMiddleware from "redux-saga";


const sagaMiddleware = createSageMiddleware();

export const store = configureStore({
    reducer: {
        waiters: waitersReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch