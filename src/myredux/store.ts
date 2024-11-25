import {configureStore} from '@reduxjs/toolkit'
import taskSlice from "../reduxSlice/taskSlice.ts";
import stateFieldSlice from "../reduxSlice/togleFieldSlice.ts"

export const store = configureStore({
    reducer: {
        task: taskSlice,
        field: stateFieldSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch