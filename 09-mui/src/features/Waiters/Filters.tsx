import {useSearchParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {actions} from "./store/reducer";
import { Input } from '@mui/base/Input';
import {Typography} from "@mui/material";


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
            <Typography variant="body1" component="label">First name</Typography>
            <Input onChange={e => setFilter(e.target.value)} type="text" id="filter"/>
        </div>
    )
}