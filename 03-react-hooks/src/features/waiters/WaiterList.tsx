import { WaiterItem } from "./WaiterItem";
import {WaiterItemInfoI} from "./type";

interface WaiterListPropsI {
    waiterList: WaiterItemInfoI[];
    editWaiter: (item: WaiterItemInfoI) => void;
    deleteWaiter: (id: number) => void;
}

export function WaiterList({ waiterList, editWaiter, deleteWaiter }: WaiterListPropsI) : React.ReactElement {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {waiterList.map(w => <WaiterItem key={w.id} itemInfo={w} editWaiter={editWaiter} deleteWaiter={deleteWaiter}  />)}
            </tbody>
        </table>
    );
}