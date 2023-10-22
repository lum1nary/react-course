import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {actions} from "./store/reducer";

export function Filters()
{
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter')

    useEffect(() => {
        dispatch(actions.setWaiterListFilterAction(filter ? filter : undefined))
    }, [filter]);

    const setFilter = (value: string) => {

        if (value && value.length > 0)
        {
            setSearchParams(`filter=${value}`)
        }
        else
        {
            setSearchParams('')
        }
    }

    return (
        <div>
            <label htmlFor="filter">First name</label>
            <input onChange={e => setFilter(e.target.value)} type="text" id="filter" />
        </div>
    )
}