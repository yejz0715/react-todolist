//action type
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

//default state(initState)=todos, 초기상태
const initState = {
  todos: [],
};

let nextId = 0;
//액션생성함수
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextId++,
      text: todo.text,
      regDate: todo.regDate,
      category: todo.category,
      isCompleted: false,
    },
  };
};

export const updateTodo = (id, text) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id: id,
      text: text,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id: id },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id: id },
  };
};

//todoReducer (상태,액션함수)
export function todoReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          text: payload.text,
          regDate: payload.regDate,
          category: payload.category,
          isCompleted: payload.isCompleted,
        }),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    default:
      return { ...state };
  }
}
