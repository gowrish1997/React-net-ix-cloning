import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:null,
  movie_name:""

};

export const userSlice = createSlice({
  name: 'user',
  initialState,
    reducers: {
      login:(state,action)=>{
        state.user=action.payload
      },
      logout:(state)=>{
        state.user=null
      },
      check_movie:(state,action)=>{
        state.movie_name=action.payload
      }
    }
    })

    export const{login,logout,check_movie}=userSlice.actions;
export const selectUser=(state)=>state.user.user

    export default userSlice.reducer;
