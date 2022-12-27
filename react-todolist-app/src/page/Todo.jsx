import React, { useEffect, useState } from "react";
import * as S from "./todoStyle";
import TodoInput from "../components/TodoInput";
import TodoTemplate from "../components/TodoTemplate";
import TodoList from "../components/TodoList";
import { todos } from "../data/dummy";
import img from "../data/image/calender.png";
import TodoHeader from "../components/TodoHeader";

const Todo = () => {
  // 새로 만든 투두의 정보를 담을 객체
  const [createdTodo, setCreatedTodo] = useState({});
  const [list, setList] = useState(todos);
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
        <S.Calender src={img} alt="calender" />
      </S.TodoBlock>
      <TodoTemplate>
        <TodoHeader />

        <TodoInput setCreatedTodo={setCreatedTodo} />
        <TodoList setList={setList} list={list} />
      </TodoTemplate>
    </S.TodoContainer>
  );
};
export default Todo;
