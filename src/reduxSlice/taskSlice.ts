import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TaskState {
    value: actionTask[]
}

export interface PayloadTask {
    text: string,
    level: number
}

interface actionTask {
    type: string
    payload: PayloadTask;

}

const initialState: TaskState = {
    value: []
}


export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        createtask: (state, action: PayloadAction<PayloadTask>) => {
            state.value.push(action)
        },
    }

})

export const {createtask} = taskSlice.actions
export default taskSlice.reducer