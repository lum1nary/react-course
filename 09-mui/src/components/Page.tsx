import React from 'react';
import {Loading} from "./Loading";
import {Alert} from "./Alert";
import {Box, Paper, Typography} from "@mui/material";

interface PropsI {
    title: string,
    loading?: boolean,
    error?: string,
    children?: React.ReactNode
}

export function Page({ title, error, loading, children }: PropsI) {
    return (
        <Paper sx={{ padding: '10px' }}>
            <Typography variant="h4" component="h5">
                {title}
            </Typography>
            {loading && <Loading />}
            {error && <Alert message={error} />}
            {!loading && !error && children}
        </Paper>
    )
}