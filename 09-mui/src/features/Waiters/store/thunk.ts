import { actions } from "./reducer";
import {WaitersApiInstance} from "../api/server";
import {WaiterItemInfoI} from "../type";
import {Dispatch} from "redux";
import {AppDispatch} from "../../../store";

// export function getList()
// {
//     return async (dispatch: Dispatch) => {
//
//         dispatch(actions.setWaiterListActionLoading());
//         try {
//             const list = await WaitersApiInstance.getList()
//             dispatch(actions.setWaiterListActionSuccess(list));
//         }
//         catch (e: any) {
//             dispatch(actions.setWaiterListActionError(e.message));
//         }
//     }
// }

export function getWaiterToEdit(id: number)
{
    return async (dispatch: Dispatch) => {
        dispatch(actions.getWaiterToEditActionLoading())
        try {
            const result = await WaitersApiInstance.get(id);
            dispatch(actions.getWaiterToEditActionSuccess(result))
        }
        catch (e: any) {
            dispatch(actions.getWaiterToEditActionError(e.message))
        }
    }
}

export function removeItem(id: number)
{
    return async (dispatch: any) => {
        await WaitersApiInstance.delete(id)
        dispatch(actions.removeWaiterActionSuccess(id));
    }
}

export function saveItem(item: WaiterItemInfoI)
{
    return async (dispatch: AppDispatch) => {
        if (item.id) {
            const result = await WaitersApiInstance.update(item)
            dispatch(actions.updateWaiterActionSuccess(result));
        }
        else {
            const result = await WaitersApiInstance.create(item)
            dispatch(actions.createWaiterActionSuccess(result));
        }
    }
}