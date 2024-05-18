import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function CustomAutocomplete({ label, options, value, onChange }) {
    return (
        <Autocomplete
            size="small"
            disablePortal
            options={options}
            getOptionLabel={(option) => option.label}
            value={value}
            isOptionEqualToValue={(option, value) => option.label === value?.label}
            onChange={(event, newValue) => onChange(newValue)}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
}

export default CustomAutocomplete;
