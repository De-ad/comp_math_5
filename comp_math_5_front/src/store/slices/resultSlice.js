import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {sendDots} from "../../services/dataService";

export const getResult = createAsyncThunk(
    "result/getResult",
    // you can pass only one arg to createAsyncThunk, tricky moment
    async (data) => {
        try{
            const {dots, argument} = data;
            const res = await sendDots(dots, argument);
            return res.data;
        }
        catch (error){
            console.log(error)
        }

    }
)

export const resultSlice = createSlice({
    name: 'result',
    initialState : {
        result : {},
        isLoading : false,
        hasError : false
    }, reducers : {
        // getResult : (state) => {
        //     return state.result;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getResult.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
            .addCase(getResult.fulfilled, (state, action) => {
                state.result = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getResult.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })

    }

})

export const selectResult = state => state.result.result;
export const selectLoading = state => state.result.isLoading;
export const selectError = state => state.result.hasError;


export default resultSlice.reducer