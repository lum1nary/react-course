import {WaiterItemInfoI} from "../type";

interface WaiterAppStateI {
    waiterToEdit: WaiterItemInfoI,
    waiterList: WaiterItemInfoI[],
}

const EMPTY_WAITER: WaiterItemInfoI = {
    firstName: '',
    phone: ''
}

const INITIAL_STATE : WaiterAppStateI = {
    waiterToEdit: EMPTY_WAITER,
    waiterList: [],
}

export const reducer = (state = INITIAL_STATE, {type, payload} : any) => {
    switch (type) {
        case 'ACTION_SET_WAITER_LIST': {
            return {...state, waiterList: payload}
        }
        case 'ACTION_SET_WAITER_TO_EDIT': {
            return {...state, waiterToEdit: payload}
        }
        case 'ACTION_UPDATE_WAITER': {
            return {
                ...state,
                waiterList: state.waiterList.map((i: WaiterItemInfoI) => i.id === payload.id ? payload : i),
                waiterToEdit: {...EMPTY_WAITER}
            }
        }
        case 'ACTION_CREATE_WAITER': {
            return {...state, waiterList: [...state.waiterList, payload], waiterToEdit : {...EMPTY_WAITER}}
        }
        case 'ACTION_REMOVE_WAITER': {
            return {...state, waiterList: state.waiterList.filter((i: WaiterItemInfoI) => i.id !== payload)}
        }
        default:
            return state
    }
}