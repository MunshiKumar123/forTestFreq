import React, { memo, useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch} from 'react-redux';
import { SelectedDevices } from '../../../store/states/devices/deviceSlice';
import { Box } from '@mui/material';
import styles from './Devices.module.css'
import HeadingPage from '../../../components/HeadingPage'

const Devices = () => {
    const dispatch = useDispatch();
    const [checkedDevices, setCheckedDevices] = useState({
        Mobile: false,
        Tablet: false,
        Desktop: false,
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        const updatedCheckedDevices = {
            ...checkedDevices,
            [name]: checked,
        };
        setCheckedDevices(updatedCheckedDevices);
        dispatch(SelectedDevices(updatedCheckedDevices));
    };


    return (
        <React.Fragment>
            <Box className={styles.main}>
                <HeadingPage title="Devices" />
                <Box className={styles.checkBoxMain}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedDevices.Mobile}
                                    onChange={handleChange}
                                    name="Mobile"
                                />
                            }
                            label="Mobile"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedDevices.Tablet}
                                    onChange={handleChange}
                                    name="Tablet"
                                />
                            }
                            label="Tablet"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedDevices.Desktop}
                                    onChange={handleChange}
                                    name="Desktop"
                                />
                            }
                            label="Desktop"
                        />
                    </FormGroup>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default memo(Devices);
