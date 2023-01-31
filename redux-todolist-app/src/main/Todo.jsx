import React, { useState } from "react";
import * as S from "./todoStyle";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoTemplate from "../components/TodoTemplate/TodoTemplate";
import TodoList from "../components/TodoList/TodoList";
import TodoCalendar from "../components/TodoCalendar/TodoCalendar";
import { Mobile, Desktop } from "../mediaQuery";

const Todo = () => {
  // 새로 만든 투두의 정보를 담을 객체
  // const todos = useSelector((state) => state.todoReducer.todos);
  const [date, setDate] = useState(new Date()); //선택한 날짜 저장할 상태
  const today = new Date().toLocaleDateString(); //오늘 날짜
  const selectedDate = date.toLocaleDateString();

  return (
    <S.TodoContainer>
      <S.TodoBlock>
        <Desktop>
          <S.HeaderTitle>TODOLIST</S.HeaderTitle>
        </Desktop>

        <Mobile>
          <S.MobileHeaderTitle>TODOLIST</S.MobileHeaderTitle>
        </Mobile>
        <TodoCalendar setDate={setDate} date={date} />
      </S.TodoBlock>

      <TodoTemplate>
        <S.NowDate>{today}</S.NowDate>

        <TodoInput selectedDate={selectedDate} />
        <TodoList selectedDate={selectedDate} />
      </TodoTemplate>
    </S.TodoContainer>
  );
};
export default Todo;
