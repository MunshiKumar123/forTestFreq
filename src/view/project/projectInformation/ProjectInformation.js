import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CustomSelectBox from '../../../components/CustomSelectBox'
import { useDispatch, useSelector } from 'react-redux';
import { ProjectFormData } from '../../../store/states/projectInformation/projectInformationSlice';
import styles from './ProjectInformation.module.css'
import HeadingPage from '../../../components/HeadingPage'
const ProjectInformation = () => {
    const dispatch = useDispatch()
    const { projectName,
        workOrderNo,
        projectType,
        category,
        client,
        clientContact,
        salesPerson,
        projectManager,
        projectDescription } = useSelector((state) => state.projectInformationSlice);

    const projectData = [
        { label: 'LMS_1', value: "LMS_1" },
        { label: 'LMS_2', value: "LMS_2" },
        { label: 'LMS_3', value: "LMS_3" },
    ];
    const categoryData = [
        { label: 'CT_1', value: "CT_1" },
        { label: 'CT_2', value: "CT_2" },
        { label: 'CT_3', value: "CT_3" },
    ];
    const clientData = [
        { label: 'CL_1', value: "CL_1" },
        { label: 'CL_2', value: "CL_2" },
        { label: 'CL_3', value: "CL_3" },
    ];

    const handleChange = (key, value) => {
        dispatch(ProjectFormData({ prop: key, value: value }))
    };

    return (
        <React.Fragment>
            <Box className={styles.main}>
                <HeadingPage title="Project Information" />
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { pl: 1, pt: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                label="Project Name"
                                variant="outlined"
                                size="small"
                                value={projectName}
                                onChange={(e) => handleChange('projectName', e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Work Order No."
                                variant="outlined"
                                size="small"
                                value={workOrderNo}
                                onChange={(e) => handleChange('workOrderNo', e.target.value)}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        m: 1
                    }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <CustomSelectBox
                                label="Project Type"
                                options={projectData}
                                value={projectType}
                                onChange={(newValue) => handleChange('projectType', newValue)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelectBox
                                label="Category"
                                options={categoryData}
                                value={category}
                                onChange={(newValue) => handleChange('category', newValue)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelectBox
                                label="Client"
                                options={clientData}
                                value={client}
                                onChange={(newValue) => handleChange('client', newValue)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelectBox
                                label="Client Contact"
                                options={categoryData}
                                value={clientContact}
                                onChange={(newValue) => handleChange('clientContact', newValue)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelectBox
                                label="Sales Person"
                                options={projectData}
                                value={salesPerson}
                                onChange={(newValue) => handleChange('salesPerson', newValue)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelectBox
                                label="Project Manager"
                                options={clientData}
                                value={projectManager}
                                onChange={(newValue) => handleChange('projectManager', newValue)}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        m: 1,
                        pb: 1
                    }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    size="small"
                                    label="Project Description"
                                    multiline
                                    rows={3}
                                    value={projectDescription}
                                    onChange={(e) => handleChange('projectDescription', e.target.value)}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </React.Fragment>
    );
}
export default React.memo(ProjectInformation)