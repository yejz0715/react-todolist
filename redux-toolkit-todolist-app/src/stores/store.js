import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../modules/todo";

export default configureStore({ reducer: { rootReducer } });
