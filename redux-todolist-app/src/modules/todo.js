//action type
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

//default state(initState)=todos
const initState = [
  {
    id: 1,
    text: "교보문구 가기",
    regDate: "2022-12-22",
    category: "일상",
    isCompleted: true,
  },
];

let nextId = 1;
//action 생성
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: {
      id: nextId++,
      text: todo.text,
      regDate: todo.regDate,
      category: todo.category,
      isCompleted: false,
    },
  };
};

//todoReducer (상태,액션함수)
export function todoReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case UPDATE_TODO:
      return;
    case DELETE_TODO:
      return;
    case TOGGLE_TODO:
      return;
    default:
      return state;
  }
}
