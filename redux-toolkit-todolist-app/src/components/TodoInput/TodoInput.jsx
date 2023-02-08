import React, { useState } from "react";
import * as S from "./inputStyle";
import PropsTypes from "prop-types";
import RadioBox from "../TodoRadioBox/RadioBox";
import EtcRadioBox from "../TodoRadioBox/EtcRadioBox";
import { useDispatch } from "react-redux";
import { addTodo } from "../../modules/todo";

const TodoInput = ({ nowDate }) => {
  const [text, setText] = useState("");
  const [categoryChecked, setCategoryChecked] = useState("");
  const [etcValue, setEtcValue] = useState("");

  const dispatch = useDispatch();

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
      regDate: nowDate,
      category: categoryChecked,
    };
    const todoEtc = {
      text: text,
      regDate: nowDate,
      category: categoryChecked + "_" + etcValue,
    };
    console.log(categoryChecked);

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
      <S.NowDate>{nowDate}</S.NowDate>
      <S.RadioLabel>카테고리</S.RadioLabel>
      <S.RadioBox>
        <RadioBox
          name="category"
          value="daily"
          text="일상"
          defaultChecked={categoryChecked === "daily"}
          onChange={handleChecked}
        />
        <RadioBox
          name="category"
          value="study"
          text="공부"
          defaultChecked={categoryChecked === "study"}
          onChange={handleChecked}
        />
        <RadioBox
          name="category"
          value="hobby"
          text="취미"
          defaultChecked={categoryChecked === "hobby"}
          onChange={handleChecked}
        />
        <EtcRadioBox
          name="category"
          value="etc"
          text="기타"
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
  nowDate: PropsTypes.string,
};

export default TodoInput;
