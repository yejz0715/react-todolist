import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import * as S from "./listStyle";
import PropsTypes from "prop-types";

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
TodoList.PropsTypes = {
  setList: PropsTypes.func,
  list: PropsTypes.object,
};
export default TodoList;
