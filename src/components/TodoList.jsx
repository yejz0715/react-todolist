import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ setList, list }) => {
  return (
    <div>
      {list &&
        list.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            regDate={item.regDate}
            category={item.category}
            isCompleted={item.isCompleted}
            list={list}
            setList={setList}
          />
        ))}
    </div>
  );
};
export default TodoList;
