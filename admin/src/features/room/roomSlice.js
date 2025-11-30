import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    rooms: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message:""
}

//create room
export const createRoom = createAsyncThunk(
    "room/create", async(roomData, thunkAPI) => {
    try {
        const res = await fetch("/api/rooms", {
            headers: {
                "Content-Type": "application/json"

            },
            method: "POST",
            body: JSON.stringify(roomData)
        })
        if(!res.ok){
            const error = await res.json()
            return thunkAPI.rejectWithValue(error)
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message)
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const roomSlice = createSlice({
    name:"room",
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
     builder
     .addCase(createRoom.pending, (state) => {
        state.isLoading = true
     })
     .addCase(createRoom.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.room = action.payload
     })
     .addCase(createRoom.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
     })
    }
})

export const { reset } = roomSlice.actions
export default roomSlice.reducer