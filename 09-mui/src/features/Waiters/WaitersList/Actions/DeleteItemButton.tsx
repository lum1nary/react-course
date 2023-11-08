import {WaiterItemInfoI} from "../../type";
import {useAppDispatch} from "../../../../hooks";
import {useState} from "react";
import {removeItem} from "../../store/thunk";
import {Button} from "@mui/material";

export function DeleteItemButton({ item } : {item : WaiterItemInfoI}) {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  {
        if (item.id) {
            setError('')
            setLoading(true)
            try {
                await dispatch(removeItem(item.id))
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
        <>
            <Button onClick={onDeleteBtnClick} disabled={loading}>Delete</Button>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </>
    )
}