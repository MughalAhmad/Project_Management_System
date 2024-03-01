import { createSlice } from "@reduxjs/toolkit";
const updateTraineeSlice=createSlice({
    name:"updateTraineeForm",
initialState:{
    userId:"",
    firstName:"",
    lastName:"",
    email:"",
    stack:"",
    assignment:""
},
    reducers:{
     updateTrainee(state,action){
        state.userId=action.payload.userId;
        state.firstName=action.payload.firstName;
        state.lastName=action.payload.lastName;
        state.email=action.payload.email;
        state.stack=action.payload.stack;
        state.assignment=action.payload.assignment;
     },
     deleteTrainee(state,action){
        state.userId="";
        state.firstName="";
        state.lastName="";
        state.email="";
        state.stack="";
        state.assignment="";
     },
    },
   
});
export {updateTraineeSlice};
export const {updateTrainee,deleteTrainee} =updateTraineeSlice.actions;
