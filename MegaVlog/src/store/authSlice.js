import {configureStore} from '@reduxjs/toolkit';
// import authSlice from './authSlice';
import { createSlice } from '@reduxjs/toolkit';


const initState={
    state:false,
    userData:null

}


const authSlice=createSlice(
    {
        name:"auth",
        initState,
        reducer:{
            login:(state,action)=>{
                state.status=true;
                state.userData=action.payload.userData;
            },
            logout:(state,action)=>{
                state.status=false;
                state.userData=null;
            }
            
        }
    }
);
export const{login,logout}=authSlice.actions;

export default authSlice.reducer;