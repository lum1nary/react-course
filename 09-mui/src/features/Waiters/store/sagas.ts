import { takeEvery, put, call, all, takeLatest } from 'redux-saga/effects';
import { actions } from "./reducer";
import {WaitersApiInstance} from "../api/server";
import {WaiterItemInfoI} from "../type";

function* getWaitersWorker() {
    try {
        const list: WaiterItemInfoI[] = yield call([WaitersApiInstance, 'getList'])
        yield put(actions.setWaiterListActionSuccess(list))
    }
    catch (error: any) {
        yield put(actions.setWaiterListActionError(error.message))
    }
}

export function* waitersWatch() {
    yield all([
        takeEvery(actions.setWaiterListActionLoading, getWaitersWorker),
    ]);
}