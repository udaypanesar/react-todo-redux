import { configureStore} from "@reduxjs/toolkit";
import todoReducer from '../Pages/slice/todo.slice'

export const store = configureStore({
    reducer:{
        todoReducer
    }
})