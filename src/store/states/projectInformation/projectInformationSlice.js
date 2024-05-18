import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectName: '',
    workOrderNo: '',
    projectType: null,
    category: null,
    client: null,
    clientContact: null,
    salesPerson: null,
    projectManager: null,
    projectDescription: '',
};


const projectInformationSlice = createSlice({
    name: "projectInformationSlice",
    initialState: initialState,
    reducers: {
        ProjectFormData: (state, action) => {
            const { prop, value } = action.payload;
            state[prop] = value;
        },
    },
});

export const { ProjectFormData } = projectInformationSlice.actions;
export default projectInformationSlice.reducer;