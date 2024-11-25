import {createSlice} from "@reduxjs/toolkit";

interface State {
    status: boolean
}

const initialState: Required<State> = {
    status: false
}

const stateFieldSlice = createSlice({
    name: "fields",
    initialState,
    reducers: {
        swapReducer: (state) => {
            state.status = !state.status
        }
    }

})

export const {swapReducer} = stateFieldSlice.actions
export default stateFieldSlice.reducer;