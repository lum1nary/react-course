import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../store";

const waiterToEditDataSelector = (state: RootState) => state.waiters.waiterToEdit;
const waiterToEditLoadingSelector = (state: RootState) => state.waiters.waiterToEditItemStatus.loading;
const waiterToEditErrorSelector = (state: RootState) => state.waiters.waiterToEditItemStatus.error;


const WaiterListDataSelector = (state: RootState) => state.waiters.waiterList;
const WaiterListLoadingSelector = (state: RootState) => state.waiters.waiterListStatus.loading;
const WaiterListErrorSelector = (state: RootState) => state.waiters.waiterListStatus.error;
const WaiterListFilterSelector =  (state: RootState) => state.waiters.waiterListFilter;

export const WaiterListSelector = createSelector(
    WaiterListDataSelector,
    WaiterListLoadingSelector,
    WaiterListErrorSelector,
    WaiterListFilterSelector,
    (waiterList, waiterListLoading, waiterListError, waiterListFilter) => {
        if (!waiterListLoading && !waiterListError && waiterListFilter)
        {
            return {
                waiterList: waiterList.filter(i => i.firstName.toLowerCase().includes(waiterListFilter.toLowerCase())),
                waiterListLoading,
                waiterListError
            }
        }

        return {waiterList, waiterListLoading, waiterListError}
    }
)

export const waiterToEditSelector = createSelector(
    waiterToEditDataSelector,
    waiterToEditLoadingSelector,
    waiterToEditErrorSelector,
    (waiterToEdit, waiterToEditLoading, waiterToEditLoadingError) => ({waiterToEdit, waiterToEditLoading, waiterToEditLoadingError})
)
