import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {WaiterItemInfoI} from "../type";
import Stack from "@mui/material/Stack";
import {EditItemButton} from "./Actions/EditItemButton";
import {DeleteItemButton} from "./Actions/DeleteItemButton";

export function useColumns() {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'Id',
        },
        {
            field: 'firstName',
            headerName: 'First Name',
            flex: 2,
        },
        {
            field: 'phone',
            headerName: 'Waiters Phone',
            flex: 2,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            flex: 2,
            renderCell: (params: GridRenderCellParams<WaiterItemInfoI>) => (
                <Stack spacing={2} direction="row">
                    <EditItemButton item={params.row} />
                    <DeleteItemButton item={params.row} />
                </Stack>
            ),
        }];

    return {
        columns,
    }
}