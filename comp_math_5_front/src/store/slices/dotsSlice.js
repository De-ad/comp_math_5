import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value : []
}

export const dotsSlice = createSlice({
    name: 'dots',
    initialState,
    reducers: {
        setDots : (state,action) => {
            state.value = action.payload;
        }
    }
})

export const {setDots} = dotsSlice.actions
export default dotsSlice.reducer