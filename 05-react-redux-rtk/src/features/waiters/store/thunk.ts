import { actions } from "./reducer";
import {WaitersApiInstance} from "../api/server";
import {WaiterItemInfoI} from "../type";
import {Dispatch} from "redux";

export function getList()
{
    return async (dispatch: Dispatch) => {

        dispatch(actions.setWaiterListActionLoading());
        try {
            const list = await WaitersApiInstance.getList()
            dispatch(actions.setWaiterListActionSuccess(list));
        }
        catch (e: any) {
            dispatch(actions.setWaiterListActionError(e));
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
    return async (dispatch: any) => {
        if (item.id) {
            dispatch(actions.updateWaiterActionLoading());
            try {
                const result = await WaitersApiInstance.update(item)
                dispatch(actions.updateWaiterActionSuccess(result));
            } catch (e : any) {
                dispatch(actions.updateWaiterActionError(e));
            }
        }
        else {
            dispatch(actions.createWaiterActionLoading());
            try {
                const result = await WaitersApiInstance.create(item)
                dispatch(actions.createWaiterActionSuccess(result));
            }
            catch (e: any) {
                dispatch(actions.createWaiterActionError(e));
            }
        }
    }
}