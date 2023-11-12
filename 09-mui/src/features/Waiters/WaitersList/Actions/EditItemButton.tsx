import {WaiterItemInfoI} from "../../type";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export function EditItemButton({ item }: { item: WaiterItemInfoI }) {

    return (
        <Link to={`/waiters/edit/${item.id}`}>
            <Button>Edit</Button>
        </Link>
        );
}