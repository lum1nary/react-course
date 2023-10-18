import { WaiterItemInfoI} from "../type";

export const ACTION_SET_WAITER_TO_EDIT = 'ACTION_SET_WAITER_TO_EDIT';
export const ACTION_UPDATE_WAITER = 'ACTION_UPDATE_WAITER';
export const ACTION_CREATE_WAITER = 'ACTION_CREATE_WAITER';
export const ACTION_REMOVE_WAITER = 'ACTION_REMOVE_WAITER';
export const ACTION_SET_WAITER_LIST = 'ACTION_SET_WAITER_LIST';


export function setWaiterToEditAction(item: WaiterItemInfoI) {
    return {
        type: ACTION_SET_WAITER_TO_EDIT,
        payload: item
    }
}

export function updateWaiterAction(item: WaiterItemInfoI) {
    return {
        type: ACTION_UPDATE_WAITER,
        payload: item
    }
}

export function createWaiterAction(item: WaiterItemInfoI) {
    return {
        type: ACTION_CREATE_WAITER,
        payload: item
    }
}

export function removeWaiterAction(id: number) {
    return {
        type: ACTION_REMOVE_WAITER,
        payload: id
    }
}

export function setWaiterListAction(list: WaiterItemInfoI[]) {
    return {
        type: ACTION_SET_WAITER_LIST,
        payload: list
    }
}