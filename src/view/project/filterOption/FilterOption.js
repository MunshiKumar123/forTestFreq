import * as React from 'react';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { SelectedFilter } from '../../../store/states/filterOption/filterOptionSlice';
import { Box } from '@mui/material';
import styles from './FilterOption.module.css'
import HeadingPage from '../../../components/HeadingPage'

const FilterOption = () => {
    const dispatch = useDispatch();
    const [checkedDevices, setCheckedDevices] = useState({
        Gatesurvey: false,
        Fraud_detection: false,
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        const updatedCheckedDevices = {
            ...checkedDevices,
            [name]: checked,
        };
        setCheckedDevices(updatedCheckedDevices);
        dispatch(SelectedFilter(updatedCheckedDevices));
    };



    return (
        <React.Fragment>
            <Box className={styles.main}>
                <HeadingPage title="Filter Options" />
                <Box className={styles.checkBoxMain}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={checkedDevices.Mobile} onChange={handleChange}
                                name="Gatesurvey" />}
                            label="Gatesurvey"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkedDevices.Tablet} onChange={handleChange}
                                name="Fraud_detection" />}
                            label="Fraud_detection"
                        />
                    </FormGroup>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default React.memo(FilterOption);
