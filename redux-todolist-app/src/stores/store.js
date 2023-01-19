import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../modules/todo";

export default configureStore({ reducer: { todoReducer } });
