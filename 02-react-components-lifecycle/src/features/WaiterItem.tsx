import { WaiterItemInfo} from "./type";

interface WaiterItemViewModel {
    itemInfo: WaiterItemInfo;
}

export function WaiterItem ({ itemInfo } : WaiterItemViewModel)
{
    return (
        <tr>
            <td>{itemInfo.id}</td>
            <td>{itemInfo.firstName}</td>
            <td>{itemInfo.phone}</td>
        </tr>
    )
}