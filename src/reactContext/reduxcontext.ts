import {createContext, Dispatch} from "react";
import {ActionCreatorWithPayload, UnknownAction} from "@reduxjs/toolkit";
import {PayloadTask} from "../reduxSlice/taskSlice.ts";

interface ValueContext {
    dispatch: Dispatch<UnknownAction>,
    createtask: ActionCreatorWithPayload<PayloadTask, "tasks/ createtask">
}

export const ContextReduxDispatch = createContext<ValueContext | null>(null);