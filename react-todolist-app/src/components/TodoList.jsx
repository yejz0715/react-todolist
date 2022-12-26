import React from "react";
import TodoItem from "./TodoItem";
import * as S from "../style/listStyle";
const TodoList = ({ setList, list }) => {
  return (
    <S.ListBox>
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
    </S.ListBox>
  );
};
export default TodoList;
