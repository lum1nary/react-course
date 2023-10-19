import { WaiterItemInfoI} from "./type";
import {useDispatch} from "react-redux";
import {removeItem} from "./store/thunk";
import { actions } from "./store/reducer";
import {useState} from "react";

interface WaiterItemViewPropsI {
    itemInfo: WaiterItemInfoI;
}

const { setWaiterToEditAction } = actions;

export function WaiterItem ({ itemInfo } : WaiterItemViewPropsI)
{
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  {
        if (itemInfo.id) {
            setError('')
            setLoading(true)
            try {
                // @ts-ignore
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

    function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  {
        dispatch(setWaiterToEditAction(itemInfo))
    }

    return (
        <tr>
            <td>{itemInfo.id}</td>
            <td>{itemInfo.firstName}</td>
            <td>{itemInfo.phone}</td>
            <td>
                <button onClick={onEditBtnClick} disabled={loading}>Edit</button>
                <button onClick={onDeleteBtnClick} disabled={loading}>Delete</button>
                {error && <span style={{color: 'red'}}>{error}</span>}
                {loading && <span style={{color: 'blue'}}>Loading...</span>}
            </td>
        </tr>
    )
}