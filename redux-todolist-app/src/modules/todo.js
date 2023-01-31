//action type
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SELECT_TODO = "SELECT_TODO";
const SELECT_CATEGORY = "SELECT_CATEGORY";
const SELECT_DATE = "SELECT_DATE";
const GET_TODOS = "GET_TODOS";

//default state(initState)=todos, 초기상태
const initState = {
  todos: [], // 원본 투두
  tmp: [], // 조건부로 갈라진 투두
  categoryState: "all",
  todoState: "all",
  currentDate: new Date().toLocaleDateString(),
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
export const selectTodo = (todoState) => {
  return {
    type: SELECT_TODO,
    payload: { todoState: todoState },
  };
};

export const selectCategory = (categoryState) => {
  return {
    type: SELECT_CATEGORY,
    payload: {
      categoryState: categoryState,
    },
  };
};
export const selectDate = (currentDate) => {
  return {
    type: SELECT_DATE,
    payload: {
      currentDate: currentDate,
    },
  };
};
export const getTodos = () => {
  return {
    type: GET_TODOS,
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
    case SELECT_TODO:
      return {
        ...state,
        todoState: payload.todoState,
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        categoryState: payload.categoryState,
      };
    case SELECT_DATE:
      return {
        ...state,
        currentDate: payload.currentDate,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) =>
            todo.regDate === state.currentDate &&
            todo.category === state.categoryState &&
            todo.isCompleted === state.todoState
        ),
      };

    default:
      return { ...state };
  }
}
