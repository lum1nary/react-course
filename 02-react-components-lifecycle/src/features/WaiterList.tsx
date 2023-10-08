import { WaiterItem } from "./WaiterItem";
import {WaiterItemInfo} from "./type";

interface WaiterListViewModel {
    waiters: WaiterItemInfo[];
}

export function WaiterList({ waiters }: WaiterListViewModel) : React.ReactElement {
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
                {waiters.map(w => <WaiterItem itemInfo={w} key={w.id} />)}
            </tbody>
        </table>
    );
}