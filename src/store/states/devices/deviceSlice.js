
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deviceData: {},
};

const deviceSlice = createSlice({
    name: "devices",
    initialState: initialState,
    reducers: {
        SelectedDevices: (state, action) => {
            state.deviceData = action.payload;
        },
    },
});

export const { SelectedDevices } = deviceSlice.actions;
export default deviceSlice.reducer;