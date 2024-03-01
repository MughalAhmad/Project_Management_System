import { configureStore } from "@reduxjs/toolkit";
import {updateTraineeSlice} from "./traineeUpdateReducers"
const store=configureStore({
    reducer:{
        updateTraineeForm:updateTraineeSlice.reducer,
    },
});

export default store;