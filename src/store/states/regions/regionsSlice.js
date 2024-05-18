import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryData: [],
};

const regionsSlice = createSlice({
    name: "country",
    initialState: initialState,
    reducers: {
        SelectedCountryName: (state, action) => {
            state.countryData = action.payload;
        },
    },
});

export const { SelectedCountryName } = regionsSlice.actions;
export default regionsSlice.reducer;