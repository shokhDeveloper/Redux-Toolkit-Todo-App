import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./slice";
export const RootReducer = combineReducers({
    todoReducer
})