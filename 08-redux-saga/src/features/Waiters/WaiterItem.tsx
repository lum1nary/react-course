import { WaiterItemInfoI} from "./type";
import {useDispatch} from "react-redux";
import {removeItem} from "./store/thunk";
import {useState} from "react";
import {Link} from "react-router-dom";
import {AppDispatch} from "../../store";

interface WaiterItemViewPropsI {
    itemInfo: WaiterItemInfoI;
}

export function WaiterItem ({ itemInfo } : WaiterItemViewPropsI)
{
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  {
        if (itemInfo.id) {
            setError('')
            setLoading(true)
            try {
                await dispatch(removeItem(itemInfo.id))
            }
            catch (e: any) {
                setError(e.message)
            }
            finally {
                setLoading(false)
            }
        }
    }

    return (
        <tr>
            <td>{itemInfo.id}</td>
            <td>{itemInfo.firstName}</td>
            <td>{itemInfo.phone}</td>
            <td>
                <Link to={`/waiters/edit/${itemInfo.id}`}>
                    <button disabled={loading}>Edit</button>
                </Link>

                <button onClick={onDeleteBtnClick} disabled={loading}>Delete</button>
                {error && <span style={{color: 'red'}}>{error}</span>}
                {loading && <span style={{color: 'blue'}}>Loading...</span>}
            </td>
        </tr>
    )
}