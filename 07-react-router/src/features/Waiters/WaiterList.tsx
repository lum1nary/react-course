import { WaiterItem } from "./WaiterItem";
import {WaiterItemInfoI} from "./type";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getList} from "./store/thunk";
import {Link} from "react-router-dom";
import {Page} from "../../components/Page";
import {WaiterListSelector} from "./store/selectors";
import {Filters} from "./Filters";

export function WaiterList() : React.ReactElement {
    const dispatch = useDispatch();

    const {waiterList, waiterListLoading, waiterListError} = useSelector(WaiterListSelector)

    useEffect(() => {

        // @ts-ignore
        dispatch(getList())
    }, [dispatch]);

    return (
        <Page title='Waiters List' loading={waiterListLoading} error={waiterListError}>
            <div>
                <Filters/>
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
                    <Link to={'/waiters/create'}>
                        <button>Add Waiter</button>
                    </Link>
                </div>
            </div>
        </Page>
    );
}