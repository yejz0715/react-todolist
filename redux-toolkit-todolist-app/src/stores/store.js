import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todo";

const store = configureStore({ reducer: todoSlice });
export default store;
