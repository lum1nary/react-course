import {WaiterList} from "./WaiterList";
import {EditWaiterForm} from "./EditWaiterForm";
import {useWaiters} from "./hooks/useWaiters";

export function WaitersApp () {

    const {waiterToEdit, waiterList, onWaiterSubmit, onWaiterEdit, onWaiterDelete} = useWaiters();

    return (
        <div>
            <WaiterList waiterList={waiterList} deleteWaiter={onWaiterDelete} editWaiter={onWaiterEdit}/>
            <EditWaiterForm  waiterToEdit={waiterToEdit} onWaiterSubmit={onWaiterSubmit}/>
        </div>
    )
}