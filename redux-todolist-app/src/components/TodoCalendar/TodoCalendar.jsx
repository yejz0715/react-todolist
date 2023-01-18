import React from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import * as S from "./calendarContainer";
import PropsTypes from "prop-types";
const TodoCalendar = ({ setDate, date }) => {
  return (
    <S.TodoCalendarBox>
      <Calendar onChange={setDate} value={date} />
    </S.TodoCalendarBox>
  );
};
TodoCalendar.PropsTypes = {
  setDate: PropsTypes.func,
  date: PropsTypes.object,
};
export default TodoCalendar;
