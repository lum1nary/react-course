import {WaiterItemInfoI} from "../type";
import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

interface WaiterAppStateI {
    waiterToEdit: WaiterItemInfoI,
    waiterList: WaiterItemInfoI[],
    waiterListFilter?: string,
    waiterListStatus: {
        loading: boolean,
        error?: string
    },
    waiterToEditItemStatus : {
        loading: boolean,
        error?: string
    }
}

export const EMPTY_WAITER: WaiterItemInfoI = {
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
    waiterListFilter: '',
    waiterToEditItemStatus : {
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
        },
        updateWaiterActionSuccess: (state: WaiterAppStateI, action: PayloadAction<WaiterItemInfoI>) => {
            state.waiterList = state.waiterList.map((i: WaiterItemInfoI) => i.id === action.payload.id ? action.payload : i)
            state.waiterToEdit = {...EMPTY_WAITER}
        },
        createWaiterActionSuccess: (state: WaiterAppStateI, action: PayloadAction<WaiterItemInfoI>) => {
            state.waiterList = [...state.waiterList, action.payload]
            state.waiterToEdit = {...EMPTY_WAITER}
        },
        removeWaiterActionSuccess: (state: WaiterAppStateI, action: PayloadAction<number>) => {
            state.waiterList = state.waiterList.filter((i: WaiterItemInfoI) => i.id !== action.payload)
        },
        setWaiterListFilterAction: (state: WaiterAppStateI, action: PayloadAction<string | undefined>) => {
            state.waiterListFilter = action.payload
        },
        setWaiterListActionLoading: (state: WaiterAppStateI) => {
            state.waiterListStatus.loading = true;
            state.waiterListStatus.error = undefined;
        },
        setWaiterListActionSuccess: (state: WaiterAppStateI, action: PayloadAction<WaiterItemInfoI[]>) => {
            state.waiterListStatus.loading = false;
            state.waiterList = action.payload
        },
        setWaiterListActionError: (state: WaiterAppStateI, action: PayloadAction<string>) => {
            state.waiterListStatus.loading = false;
            state.waiterListStatus.error = action.payload;
        },
        getWaiterToEditActionLoading: (state: WaiterAppStateI) => {
            state.waiterToEditItemStatus.loading = true;
            state.waiterToEditItemStatus.error = undefined;
        },
        getWaiterToEditActionSuccess: (state: WaiterAppStateI, action: PayloadAction<WaiterItemInfoI>) => {
            state.waiterToEditItemStatus.loading = false;
            state.waiterToEdit = action.payload
        },
        getWaiterToEditActionError: (state: WaiterAppStateI, action: PayloadAction<string>) => {
            state.waiterToEditItemStatus.loading = false;
            state.waiterToEditItemStatus.error = action.payload;
        },
    }
})

export const { reducer, actions } = waiterSlice;
