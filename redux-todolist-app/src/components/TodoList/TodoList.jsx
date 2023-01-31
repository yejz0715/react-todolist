import React, { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import * as S from "./listStyle";
import PropsTypes from "prop-types";
import SelectBox from "../SelectBox";
import { useDispatch, useSelector } from "react-redux";
import { selectDate } from "../../modules/todo";

const TodoList = ({ selectedDate }) => {
  const dispatch = useDispatch();

  // 확인해야 할 것
  // 투두 상태, 카테고리, 선택한 날짜

  // 날짜

  // 카테고리가 all -> todos
  // 나머지는 -> tmp

  // todoState랑 일치하는 투두 목록을 추출

  // const day = useSelector((state) => state.todoReducer.currentDate);

  useEffect(() => {
    const date = selectedDate;
    dispatch(selectDate(date));
    // console.log("여기", day);
  }, [selectedDate]);

  const list = useSelector((state) => state.todoReducer.todos);

  // const dateList = list.filter((item) => item.regDate === selectedDate); //날짜기준_리스트
  // const [currentValue, setCurrentValue] = useState(list[0].text); //현재 선택한 옵션

  const todoList = [
    { id: 1, value: "all", text: "all" },
    { id: 2, value: "completed", text: "completed" },
    { id: 3, value: "inComplete", text: "inComplete" },
  ];
  const categoryList = [
    { id: 1, value: "all", text: "all" },
    { id: 2, value: "daily", text: "daily" },
    { id: 3, value: "study", text: "study" },
    { id: 4, value: "hobby", text: "hobby" },
    { id: 5, value: "etc", text: "etc" },
  ];
  //
  return (
    <>
      <S.NowDate>{selectedDate}</S.NowDate>
      <S.ListBox>
        <S.SelectContainer>
          <SelectBox list={todoList} type="todo" />
          <SelectBox list={categoryList} type="cate" />
        </S.SelectContainer>
        {/* all-all todos 
            (다른 조건-reducer)나머지 tmp */}
        {list &&
          list.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              regDate={item.regDate}
              category={item.category}
              isCompleted={item.isCompleted}
            />
          ))}
      </S.ListBox>
    </>
  );
};
TodoList.PropsTypes = {
  setList: PropsTypes.func,
  list: PropsTypes.object,
};
export default TodoList;
