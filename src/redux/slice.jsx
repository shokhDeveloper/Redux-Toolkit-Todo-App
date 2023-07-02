import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: window.localStorage.getItem("todos")
    ? JSON.parse(window.localStorage.getItem("todos"))
    : [],
    edit_disabled: true
};
export const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo(state, action) {
      state.todos = [...state.todos, action.payload];
      window.localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deletePosts(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      window.localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editDisabled(state){
        state.edit_disabled = !state.edit_disabled           
    }    
  },
});
export const todoAction = slice.actions;
export const todoReducer = slice.reducer;
