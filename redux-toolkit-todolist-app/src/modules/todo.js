import { combineReducers, createSlice } from "@reduxjs/toolkit";

const initState = {
  todos: [],
};
let nextId = 0;

//createSlice(name, initState, reducer)
const todoSlice = createSlice({
  name: "todoReducer",
  initialState: initState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push({
        id: nextId++,
        regDate: payload.regDate,
        text: payload.text,
        category: payload.category,
        isCompleted: false,
      });
    },

    updateTodo: (state, { payload }) => {
      state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      );
    },

    deleteTodo: (state, { payload }) =>
      state.todos.filter((todo) => todo.id !== payload.id),
    toggleTodo: (state, { payload }) => {
      state.todos.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isCompleted: !payload.isCompleted }
          : todo
      );
    },
  },
});
export const { addTodo, updateTodo, deleteTodo, toggleTodo } =
  todoSlice.actions;
let rootReducer = combineReducers({ reducer: todoSlice.reducer });
export default rootReducer;
