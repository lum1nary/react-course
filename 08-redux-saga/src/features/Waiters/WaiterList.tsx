import { WaiterItem } from "./WaiterItem";
import {WaiterItemInfoI} from "./type";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {actions} from "./store/reducer";
import {Link} from "react-router-dom";
import {Page} from "../../components/Page";
import {WaiterListSelector} from "./store/selectors";
import {Filters} from "./Filters";
import {useAppDispatch} from "../../hooks";

export function WaiterList() : React.ReactElement {
    const dispatch = useAppDispatch();

    const {waiterList, waiterListLoading, waiterListError} = useSelector(WaiterListSelector)

    useEffect(() => {

        dispatch(actions.setWaiterListActionLoading())
    }, [dispatch, actions.setWaiterListActionLoading]);

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