import React, { useEffect, useState } from "react";
import * as S from "./todoStyle";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoTemplate from "../components/TodoTemplate/TodoTemplate";
import TodoList from "../components/TodoList/TodoList";
import { todos } from "../data/dummy";
import TodoCalendar from "../components/TodoCalendar/TodoCalendar";

const Todo = () => {
  // 새로 만든 투두의 정보를 담을 객체
  const [createdTodo, setCreatedTodo] = useState({});
  const [list, setList] = useState(todos);
  const [date, setDate] = useState(new Date()); //날짜 저장할 상태
  const nowDate = date.toLocaleDateString();

  // handleAddTodo()를 실행
  useEffect(() => {
    if (!createdTodo.text) return;
    handleAddTodo();
  }, [createdTodo]);

  //목록에 새로운 투두를 추가하는 함수
  const handleAddTodo = () => {
    // 배열에 새로운 투두 객체를 추가
    // 이전 상태를 유지
    setList([...list, createdTodo]);
  };

  return (
    <S.TodoContainer>
      <S.TodoBlock>
        <S.HeaderTitle>TODOLIST</S.HeaderTitle>
        <TodoCalendar setDate={setDate} date={date} />
      </S.TodoBlock>

      <TodoTemplate>
        <S.NowDate>{nowDate}</S.NowDate>

        <TodoInput setCreatedTodo={setCreatedTodo} nowDate={nowDate} />
        <TodoList setList={setList} list={list} />
      </TodoTemplate>
    </S.TodoContainer>
  );
};
export default Todo;
