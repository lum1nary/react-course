import { WaiterItem } from "./WaiterItem";
import {WaiterItemInfoI} from "./type";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getList} from "./store/thunk";

export function WaiterList() : React.ReactElement {
    const dispatch = useDispatch();
    const waiterList = useSelector((state: any) => state.waiters.waiterList);
    const loading = useSelector((state: any) => state.waiters.waiterListStatus.loading);
    const error = useSelector((state: any) => state.waiters.waiterListStatus.error);

    useEffect(() => {

        // @ts-ignore
        dispatch(getList())
    }, [dispatch]);

    return (
        <>
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
            <div>
                {error && <span style={{color: 'red'}}>{error.message}</span>}
                {loading && <span style={{color: 'blue'}}>Loading...</span>}
            </div>

        </>
    );
}