import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    specificationsList: [],
};

const specificationsSlice = createSlice({
    name: "country",
    initialState: initialState,
    reducers: {
        SpecificationsGetData: (state, action) => {
            state.specificationsList = action.payload;
        },
    },
});

export const { SpecificationsGetData } = specificationsSlice.actions;
export default specificationsSlice.reducer;