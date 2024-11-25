import {useContext, useRef} from "react";
import {ContextReduxDispatch} from "../reactContext/reduxcontext.ts";
import {PayloadTask} from "../reduxSlice/taskSlice.ts";


export default function CreateTask() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const context = useContext(ContextReduxDispatch);

    const createTask = () => {
        if (inputRef.current && inputRef.current.value) {
            const newTask: PayloadTask = {
                text: inputRef.current.value,
                level: 1
            };
            context?.dispatch(context?.createtask(newTask))
        }
    }

    return (
        <div>
            <input ref={inputRef} type={"text"}/>
            <button onClick={createTask}>Создать</button>
        </div>
    )
}