import {WaiterList} from "./WaiterList";
import React, {useEffect, useState}  from "react";
import {WaiterItemInfo} from "./type";
import {WaitersApi} from "./api/WaitersApi";
import {AddWaiterForm} from "./AddWaiterForm";


export function WaitersApp () {
    const [waiters, setWaiters] = useState<WaiterItemInfo[]>([]);

    useEffect(() => {
        WaitersApi.getList().then((waiters) => setWaiters(waiters))
    }, []);

    const onWaiterAddSubmit = (waiter : WaiterItemInfo) => {
        WaitersApi.create(waiter).then((nw) => setWaiters([...waiters, nw]))
    }

    return (
        <div>
            <WaiterList waiters={waiters}/>
            <AddWaiterForm onWaiterAddSubmit={onWaiterAddSubmit}/>
        </div>
    )
}