import { combineReducers, createSlice } from "@reduxjs/toolkit";

const initState = {
  todos: [],
};
let nextNum = 0;
const todoSlice = createSlice({
  name: "todoReducer",
  initialState: initState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push({
        id: nextNum++,
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
let rootReducer = combineReducers({ reducer: todoSlice.reducer });
export default rootReducer;
