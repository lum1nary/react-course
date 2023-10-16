import {WaiterItemInfoI} from "../type";
import { useState, useCallback, useEffect } from "react";
import {WaitersApiInstance} from "../api/server";

const EMPTY_WAITER: WaiterItemInfoI = {
    firstName: '',
    phone: ''
}

export function useWaiters() {
    const [waiterToEdit, setWaiterToEdit] = useState<WaiterItemInfoI>(EMPTY_WAITER)
    const [waiterList, setWaiterList] = useState<WaiterItemInfoI[]>([])

    const getWaiters = useCallback(() => {
        WaitersApiInstance.getList().then(list => setWaiterList(list))
    }, []);

    const updateWaiter = useCallback((item: WaiterItemInfoI) => {
        WaitersApiInstance.update(item).then(updatedItem => {
            setWaiterList(waiterList.map(i => i.id === updatedItem.id ?  updatedItem : i));
            setWaiterToEdit({...EMPTY_WAITER});
        })
    }, [waiterList]);

    const addWaiter = useCallback((item: WaiterItemInfoI) => {
        WaitersApiInstance.create(item).then(addedItem => {
            setWaiterList([...waiterList, addedItem]);
            setWaiterToEdit({...EMPTY_WAITER});
        })
    }, [waiterList])

    const deleteWaiter = useCallback((id: number) => {
        WaitersApiInstance.delete(id).then(() => {
            setWaiterList(waiterList.filter(i => i.id !== id));
        })
    }, [waiterList])

    useEffect(() => {
        getWaiters()
    }, [getWaiters]);

    const onWaiterSubmit = (item: WaiterItemInfoI) => {
        if (item.id)
        {
           updateWaiter(item);
        }
        else
        {
            addWaiter(item);
        }
    }

    return {
        waiterToEdit,
        waiterList,
        onWaiterSubmit,
        onWaiterDelete: deleteWaiter,
        onWaiterEdit: setWaiterToEdit,
    }
}