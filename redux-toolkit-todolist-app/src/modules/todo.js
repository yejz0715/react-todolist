import { combineReducers, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session"; //세션스토리에 저장
import persistReducer from "redux-persist/es/persistReducer";
const initState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todoReducer",
  initialState: initState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push({
        id: Date.now(),
        text: payload.text,
        regDate: payload.regDate,
        category: payload.category,
        isCompleted: false,
      });
    },
    updateTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.updateText } : todo
      );
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    toggleTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } =
  todoSlice.actions;

//persistConfig
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["reducer"],
};

let rootReducer = combineReducers({
  reducer: todoSlice.reducer,
});

//persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
