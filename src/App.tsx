import {useRef} from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./myredux/store.ts";
import {swapReducer} from "./reduxSlice/togleFieldSlice.ts";
import CreateTask from "./CreateTask/CreateTask.tsx";
import {createtask} from "./reduxSlice/taskSlice.ts";
import {ContextReduxDispatch} from './reactContext/reduxcontext.ts';


function App() {
    const dispatch = useDispatch()
    const refButtonCreate = useRef<HTMLButtonElement | null>(null)
    const task = useSelector((state: RootState) =>
        state.task.value
    )
    const statusCreate = useSelector((state: RootState) => state.field.status)
    const hiddenButtonAndGenNew = () => {
        if (refButtonCreate.current) {
            refButtonCreate.current.style.display = "none";
            dispatch(swapReducer())
        }
    }


    return (
        <>
            <ContextReduxDispatch.Provider value={{
                dispatch,
                createtask,
            }}>
                {task.map((item) => {
                    console.log(item)
                    return <p>{item.payload.text}</p>
                })}
                {
                    statusCreate ? (<CreateTask/>) : null
                }
                <button ref={refButtonCreate} onClick={hiddenButtonAndGenNew}>Increment</button>


            </ContextReduxDispatch.Provider>
        </>
    )
}

export default App
