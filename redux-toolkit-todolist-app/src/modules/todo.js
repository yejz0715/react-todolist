import { createSlice } from "@reduxjs/toolkit";

const initState = {
  todos: [],
};
//createSlice(name, 초기값, reducer)
let nextId = 0;
const todoSlice = createSlice({
  name: "todoReducer",
  initialState: initState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push({
        id: nextId++,
        regDate: payload.regDate,
        text: payload.text,
        category: payload.category,
        isCompleted: payload.isCompleted,
      });
    },
    updateTodo: (state, { payload }) =>
      state.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      ),

    deleteTodo: (state, { payload }) =>
      state.filter((todo) => todo.id !== payload.id),
    toggleTodo: (state, { payload }) =>
      state.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      ),
  },
});
export const { addTodo, updateTodo, deleteTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
