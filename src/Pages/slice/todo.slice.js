import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },

    editTodo: (state, action) => {
        console.log("inside slice",action.payload);
      state.todo = state.todo.map((item) => (item.id === action.payload.id ? { ...item, ...action.payload } : item));
    },

    removeTodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },

    clearAllTodo: (state) => {
        state.todo=[]
    },
  },
});

export const { addTodo, editTodo, removeTodo, clearAllTodo } = todoSlice.actions;
export default todoSlice.reducer;
