import React, { useState } from "react";
import PropsTypes from "prop-types";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, selectCategory } from "../../modules/todo";

const SelectBox = ({ list, state, type }) => {
  const [isShow, setShow] = useState(false); //리스트가 보이는지
  // const [currentValue, setCurrentValue] = useState(list[0].text); //현재 선택한 옵션
  const currentValue = useSelector((state) =>
    type === "todo" ? state.todo.todoState : state.todo.categoryState
  );

  const dispatch = useDispatch();

  const showOptionList = () => {
    setShow((prev) => !prev);
  };

  const handleOption = (e) => {
    if (type === "todo") {
      dispatch(selectTodo(e.target.innerText));
      //  console.log(e.target.innerText);
    } else {
      dispatch(selectCategory(e.target.innerText));
      //  console.log(e.target.innerText);
    }

    setShow((prev) => !prev);
  };

  return (
    <S.SelectContainer onClick={showOptionList}>
      <S.SelectLabel>{currentValue}</S.SelectLabel>
      <S.OptionList isShow={isShow} onClick={showOptionList}>
        {list.map((item) => (
          <S.Option key={item.id} value={item.value} onClick={handleOption}>
            {item.text}
          </S.Option>
        ))}
      </S.OptionList>
    </S.SelectContainer>
  );
};
SelectBox.PropsTypes = {
  list: PropsTypes.object,
};
export default SelectBox;
