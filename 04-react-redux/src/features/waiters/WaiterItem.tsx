import { WaiterItemInfoI} from "./type";
import {useDispatch} from "react-redux";
import {removeItem} from "./store/thunk";
import {setWaiterToEditAction} from "./store/actions";

interface WaiterItemViewPropsI {
    itemInfo: WaiterItemInfoI;
}

export function WaiterItem ({ itemInfo } : WaiterItemViewPropsI)
{
    const dispatch = useDispatch();

    function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  {
        if (itemInfo.id) {
            // @ts-ignore
            dispatch(removeItem(itemInfo.id))
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
                <button onClick={onEditBtnClick}>Edit</button>
                <button onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    )
}