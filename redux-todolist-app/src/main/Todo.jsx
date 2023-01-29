import React, { useState } from "react";
import * as S from "./todoStyle";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoTemplate from "../components/TodoTemplate/TodoTemplate";
import TodoList from "../components/TodoList/TodoList";
import TodoCalendar from "../components/TodoCalendar/TodoCalendar";
import { useSelector } from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  // 새로 만든 투두의 정보를 담을 객체
  const [date, setDate] = useState(new Date()); //날짜 저장할 상태
  const today = new Date().toLocaleDateString();
  const nowDate = date.toLocaleDateString();

  return (
    <S.TodoContainer>
      <S.TodoBlock>
        <S.HeaderTitle>TODOLIST</S.HeaderTitle>
        <TodoCalendar setDate={setDate} date={date} />
      </S.TodoBlock>

      <TodoTemplate>
        <S.NowDate>{today}</S.NowDate>

        <TodoInput nowDate={nowDate} />
        <TodoList nowDate={nowDate} />
      </TodoTemplate>
    </S.TodoContainer>
  );
};
export default Todo;
