import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    rooms: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message:""
}

export const roomSlice = createSlice({
    name:roomSlice,
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        },
    },
    extraReducers: builder => {
        //cases
    }
})

export const {reset} = roomSlice.actions
export default roomSlice.reducer