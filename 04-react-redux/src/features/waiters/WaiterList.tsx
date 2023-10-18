import { WaiterItem } from "./WaiterItem";
import {WaiterItemInfoI} from "./type";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getList} from "./store/thunk";

export function WaiterList() : React.ReactElement {
    const dispatch = useDispatch();
    const waiterList = useSelector((state: any) => state.waiters.waiterList);

    useEffect(() => {

        // @ts-ignore
        dispatch(getList())
    }, [getList]);


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
                {waiterList.map((w: WaiterItemInfoI) => <WaiterItem key={w.id} itemInfo={w} />)}
            </tbody>
        </table>
    );
}