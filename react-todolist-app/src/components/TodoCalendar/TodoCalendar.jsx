import React from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import * as S from "./calendarContainer";
const TodoCalendar = ({ setDate, date }) => {
  return (
    <S.TodoCalendarBox>
      <Calendar onChange={setDate} value={date} />
    </S.TodoCalendarBox>
  );
};

export default TodoCalendar;
