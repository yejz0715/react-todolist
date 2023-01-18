import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import * as S from "./listStyle";
import PropsTypes from "prop-types";
import SelectBox from "../SelectBox";

const TodoList = ({ setList, list }) => {
  const todoList = [
    { id: 1, value: "all", text: "할일" },
    { id: 2, value: "completed", text: "완료" },
    { id: 3, value: "inComplete", text: "미완료" },
  ];
  const categoryList = [
    { id: 1, value: "all", text: "카테고리" },
    { id: 2, value: "daily", text: "일상" },
    { id: 3, value: "study", text: "공부" },
    { id: 4, value: "hobby", text: "취미" },
    { id: 5, value: "etc", text: "기타" },
  ];
  return (
    <S.ListBox>
      <S.SelectContainer>
        <SelectBox list={todoList} />
        <SelectBox list={categoryList} />
      </S.SelectContainer>
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
