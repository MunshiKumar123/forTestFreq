
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterData: {},
};

const filterOptionSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        SelectedFilter: (state, action) => {
            state.filterData = action.payload;
        },
    },
});

export const { SelectedFilter } = filterOptionSlice.actions;
export default filterOptionSlice.reducer;