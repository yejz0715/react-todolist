import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../modules/todo";

//store
const store = configureStore({
  reducer: { rootReducer },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
