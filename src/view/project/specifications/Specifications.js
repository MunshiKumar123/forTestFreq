import React, { memo, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { SpecificationsGetData } from '../../../store/states/specifications/specificationsSlice';
import { Box } from '@mui/material';
import styles from './Specifications.module.css'
import HeadingPage from '../../../components/HeadingPage'


const Specifications = () => {
    const dispatch = useDispatch()
    const { countryData } = useSelector((state) => state.regionsSlice);
    const { specificationsList } = useSelector((state) => state.specificationsSlice);

    useEffect(() => {
        const filterData = countryData?.map((item) => {
            return { label: item.label, language: "english", group: "", cpi: "", loi: "", ir: "", completes: "" }
        })
        dispatch(SpecificationsGetData(filterData))
    }, [countryData, dispatch])

    const handleClone = (index) => {
        const clonedRow = { ...specificationsList[index] };
        const newData = [...specificationsList];
        newData.splice(index + 1, 0, clonedRow);
        dispatch(SpecificationsGetData(newData));
    };

    const handleRemove = (index) => {
        const newData = [...specificationsList];
        newData.splice(index, 1);
        dispatch(SpecificationsGetData(newData));
    };

    const handlePriceChange = (index, value, field) => {
        const newData = specificationsList.map((item, i) => {
            if (i === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        dispatch(SpecificationsGetData(newData));
    };
    return (
        <React.Fragment>
            <Box className={styles.main}>
                <Box className={styles.heading}>
                    {specificationsList?.length > 0 && (
                        <HeadingPage title="Specifications" />
                    )}
                </Box>
                {specificationsList?.length > 0 && (
                    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Country</TableCell>
                                    <TableCell>Language</TableCell>
                                    <TableCell>Target Group</TableCell>
                                    <TableCell>CPI($)</TableCell>
                                    <TableCell>LOI(MIN.)</TableCell>
                                    <TableCell>IR(%)</TableCell>
                                    <TableCell>Completes</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {specificationsList?.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.label}</TableCell>
                                        <TableCell>{item.language}</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                value={item.group || ''}
                                                onChange={(e) => handlePriceChange(index, e.target.value, 'group')}
                                            />

                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                value={item.cpi || ''}
                                                onChange={(e) => handlePriceChange(index, e.target.value, 'cpi')}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                value={item.loi || ''}
                                                onChange={(e) => handlePriceChange(index, e.target.value, 'loi')}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                value={item.ir || ''}
                                                onChange={(e) => handlePriceChange(index, e.target.value, 'ir')}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                value={item.completes || ''}
                                                onChange={(e) => handlePriceChange(index, e.target.value, 'completes')}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Stack direction="row" spacing={1}>
                                                <IconButton
                                                    onClick={() => handleClone(index)}
                                                    sx={{
                                                        color: "green"
                                                    }}
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => handleRemove(index)}
                                                    sx={{
                                                        color: "red"
                                                    }}
                                                >
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </React.Fragment>
    );
};

export default memo(Specifications);
