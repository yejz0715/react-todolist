import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as S from "./calenderContainer";
const TodoCalender = () => {
  const [date, setDate] = useState(new Date()); //날짜 저장할 상태
  return (
    <S.TodoCalenderBox>
      <S.NowDate>{date.toLocaleDateString()}</S.NowDate>
      <Calendar onChange={setDate} value={date} />
    </S.TodoCalenderBox>
  );
};
export default TodoCalender;
