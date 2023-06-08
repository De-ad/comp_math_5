import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value : 0
}


export const argumentSlice = createSlice({
    name : 'argument',
    initialState,
    reducers:{
        setArgument: (state, action) => {
            state.value = action.payload;
        }

    }
})

export const {setArgument} = argumentSlice.actions;
export default argumentSlice.reducer;