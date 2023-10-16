import { WaiterItemInfoI} from "./type";

interface WaiterItemViewPropsI {
    itemInfo: WaiterItemInfoI;
    editWaiter: (item: WaiterItemInfoI) => void;
    deleteWaiter: (id: number) => void;
}

export function WaiterItem ({ itemInfo, editWaiter, deleteWaiter } : WaiterItemViewPropsI)
{
    function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  {
        if (itemInfo.id) {
            deleteWaiter(itemInfo.id)
        }
    }

    function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  {
        editWaiter(itemInfo)
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