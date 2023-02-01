import React, { useState } from "react";
import * as S from "./inputStyle";
import PropsTypes from "prop-types";
import RadioBox from "../TodoRadioBox/RadioBox";
import EtcRadioBox from "../TodoRadioBox/EtcRadioBox";
import { useDispatch } from "react-redux";
import { addTodo } from "../../modules/todo";

const TodoInput = ({ selectedDate }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [categoryChecked, setCategoryChecked] = useState("");
  const [etcValue, setEtcValue] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleChecked = (e) => {
    setCategoryChecked(e.target.value);
    setEtcValue("");
  };

  const handleEtcValue = (e) => {
    setEtcValue(e.target.value);
  };

  const handleCreateTodo = () => {
    const todo = {
      text: text,
      regDate: selectedDate,
      category: categoryChecked,
    };
    const todoEtc = {
      text: text,
      regDate: selectedDate,
      category: categoryChecked + "_" + etcValue,
    };

    if (text !== "" && categoryChecked !== "") {
      if (categoryChecked === "etc") {
        if (etcValue !== "") {
          dispatch(addTodo(todoEtc));
          setEtcValue("");
          setText("");
        } else {
          alert("기타항목을 입력해주세요!");
        }
      } else {
        dispatch(addTodo(todo));
        setEtcValue("");
        setText("");
      }
    } else {
      alert("할일과 카테고리가 입력되었는지 확인해주세요! ");
    }
  };

  return (
    <S.InputContainer>
      <S.NowDate>{selectedDate}</S.NowDate>

      <S.RadioBox>
        <S.RadioLabel>카테고리</S.RadioLabel>

        <RadioBox
          name="category"
          value="daily"
          text="daily"
          defaultChecked={categoryChecked === "daily"}
          onChange={handleChecked}
        />
        <RadioBox
          name="category"
          value="study"
          text="study"
          defaultChecked={categoryChecked === "study"}
          onChange={handleChecked}
        />
        <RadioBox
          name="category"
          value="hobby"
          text="hobby"
          defaultChecked={categoryChecked === "hobby"}
          onChange={handleChecked}
        />
        <EtcRadioBox
          name="category"
          value="etc"
          text="etc"
          defaultChecked={categoryChecked === "etc"}
          onChange={handleChecked}
          handleEtcValue={handleEtcValue}
          etcValue={etcValue}
        />
      </S.RadioBox>

      <S.InputBox>
        <S.Input
          type="text"
          value={text}
          onChange={handleText}
          placeholder="할일을 입력해주세요!"
        />
        <S.InputButton onClick={handleCreateTodo}>추가</S.InputButton>
      </S.InputBox>
    </S.InputContainer>
  );
};

TodoInput.PropsTypes = {
  selectedDate: PropsTypes.string,
};

export default TodoInput;
