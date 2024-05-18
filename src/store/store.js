import { configureStore } from "@reduxjs/toolkit";
import regionsSlice from "./states/regions/regionsSlice";
import specificationsSlice from "./states/specifications/specificationsSlice";
import projectInformationSlice from "./states/projectInformation/projectInformationSlice";
import deviceSlice from "./states/devices/deviceSlice";
import filterOptionSlice from "./states/filterOption/filterOptionSlice";

const store = configureStore({
    reducer: {
        regionsSlice,
        specificationsSlice,
        projectInformationSlice,
        deviceSlice,
        filterOptionSlice
    },
});

export default store;