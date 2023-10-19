import {WaiterItemInfoI} from "../type";
import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

interface WaiterAppStateI {
    waiterToEdit: WaiterItemInfoI,
    waiterList: WaiterItemInfoI[],
    waiterListStatus: {
        loading: boolean,
        error?: Error
    },
    waiterSubmitStatus : {
        loading: boolean,
        error?: Error
    }

}

const EMPTY_WAITER: WaiterItemInfoI = {
    firstName: '',
    phone: ''
}

const INITIAL_STATE : WaiterAppStateI = {
    waiterToEdit: EMPTY_WAITER,
    waiterList: [],
    waiterListStatus : {
        loading: false,
        error: undefined
    },
    waiterSubmitStatus : {
        loading: false,
        error: undefined
    }
}

export const waiterSlice = createSlice({
    name: 'waiters',
    initialState: INITIAL_STATE,
    reducers: {
        setWaiterToEditAction: (state: WaiterAppStateI, action: PayloadAction<WaiterItemInfoI>) => {
            state.waiterToEdit = action.payload
            state.waiterSubmitStatus.error = undefined;
        },
        updateWaiterActionSuccess: (state: WaiterAppStateI, action: PayloadAction<WaiterItemInfoI>) => {
            state.waiterList = state.waiterList.map((i: WaiterItemInfoI) => i.id === action.payload.id ? action.payload : i)
            state.waiterToEdit = {...EMPTY_WAITER}
            state.waiterSubmitStatus.loading = false;
        },
        updateWaiterActionLoading: (state: WaiterAppStateI) => {
            state.waiterSubmitStatus.loading = true;
            state.waiterSubmitStatus.error = undefined;
        },
        updateWaiterActionError: (state: WaiterAppStateI, action: PayloadAction<Error>) => {
            state.waiterSubmitStatus.loading = false;
            state.waiterSubmitStatus.error = action.payload;
        },
        createWaiterActionSuccess: (state: WaiterAppStateI, action: PayloadAction<WaiterItemInfoI>) => {
            state.waiterList = [...state.waiterList, action.payload]
            state.waiterToEdit = {...EMPTY_WAITER}
            state.waiterSubmitStatus.loading = false;
        },
        createWaiterActionLoading: (state: WaiterAppStateI) => {
            state.waiterSubmitStatus.loading = true;
            state.waiterSubmitStatus.error = undefined;
        },
        createWaiterActionError: (state: WaiterAppStateI, action: PayloadAction<Error>) => {
            state.waiterSubmitStatus.loading = false;
            state.waiterSubmitStatus.error = action.payload;
        },
        removeWaiterActionSuccess: (state: WaiterAppStateI, action: PayloadAction<number>) => {
            state.waiterList = state.waiterList.filter((i: WaiterItemInfoI) => i.id !== action.payload)
        },
        setWaiterListActionLoading: (state: WaiterAppStateI) => {
            state.waiterListStatus.loading = true;
            state.waiterListStatus.error = undefined;
        },
        setWaiterListActionSuccess: (state: WaiterAppStateI, action: PayloadAction<WaiterItemInfoI[]>) => {
            state.waiterListStatus.loading = false;
            state.waiterList = action.payload
        },
        setWaiterListActionError: (state: WaiterAppStateI, action: PayloadAction<Error>) => {
            state.waiterList = [];
            state.waiterListStatus.loading = false;
            state.waiterListStatus.error = action.payload;
        }
    }
})

export const { reducer, actions } = waiterSlice;
