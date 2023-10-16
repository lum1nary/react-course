import {
    setWaiterListAction,
    createWaiterAction,
    updateWaiterAction,
    removeWaiterAction,
} from "./actions"
import {WaitersApiInstance} from "../api/server";
import {WaiterItemInfoI} from "../type";
import {Dispatch} from "redux";

export function getList()
{
    return (dispatch: Dispatch) => {
        WaitersApiInstance.getList()
            .then(list => dispatch(setWaiterListAction(list)));
    }
}

export function removeItem(id: number)
{
    return (dispatch: any) => {
        WaitersApiInstance.delete(id)
            .then(() => dispatch(removeWaiterAction(id)));

    }
}

export function saveItem(item: WaiterItemInfoI)
{
    return (dispatch: any) => {

        if (item.id) {
            WaitersApiInstance.update(item)
                .then(updatedItem => dispatch(updateWaiterAction(updatedItem)));
        }
        else {
            WaitersApiInstance.create(item)
                .then(addedItem => dispatch(createWaiterAction(addedItem)));
        }
    }
}