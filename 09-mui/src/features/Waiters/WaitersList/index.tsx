import {useSelector} from "react-redux";
import {useEffect} from "react";
import {actions} from "../store/reducer";
import {Link} from "react-router-dom";
import {Page} from "../../../components/Page";
import {WaiterListSelector} from "../store/selectors";
import {Filters} from "../Filters";
import {useAppDispatch} from "../../../hooks";
import {Box, Button, Stack} from "@mui/material";
import {useStyles} from "./styles";
import {DataGrid} from '@mui/x-data-grid';
import {useColumns} from "./useColumns";

export function Index() : React.ReactElement {
    const dispatch = useAppDispatch();
    const { classes } = useStyles();
    const { columns } = useColumns();

    const {waiterList, waiterListLoading, waiterListError} = useSelector(WaiterListSelector)

    useEffect(() => {

        dispatch(actions.setWaiterListActionLoading())
    }, [dispatch, actions.setWaiterListActionLoading]);

    return (
        <Page title='Waiters List' loading={waiterListLoading} error={waiterListError}>
            <Stack spacing={3}>
                <Filters/>

                <Box sx={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={waiterList}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                    />
                </Box>
                <Box className={classes.end}>
                    <Link to={'/waiters/create'}>
                        <Button size="small" variant="outlined">Add Waiter</Button>
                    </Link>
                </Box>
            </Stack>
        </Page>
    );
}