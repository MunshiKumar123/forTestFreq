import React, { Suspense, lazy } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const ProjectInformation = lazy(() => import('./projectInformation/ProjectInformation'));
const Devices = lazy(() => import('./devices/Devices'));
const FilterOption = lazy(() => import('./filterOption/FilterOption'));
const Regions = lazy(() => import('./regions/Regions'));
const Specifications = lazy(() => import('./specifications/Specifications'));
const SubmitDetails = lazy(() => import('./submitDetails/SubmitDetails'));

const Loader = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
    </Box>
);

const CreateProject = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <ProjectInformation />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Devices />
                        <FilterOption />
                    </Grid>
                    <Grid item xs={12}>
                        <Regions />
                    </Grid>
                    <Grid item xs={12}>
                        <Specifications />
                    </Grid>
                    <Grid item xs={12}>
                        <SubmitDetails />
                    </Grid>
                </Grid>
            </Box>
        </Suspense>
    );
};

export default CreateProject;
