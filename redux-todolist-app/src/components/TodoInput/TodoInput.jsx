import React, { useState } from "react";
import { useRef } from "react";
import * as S from "./inputStyle";
import PropsTypes from "prop-types";
import RadioBox from "../TodoRadioBox/RadioBox";
import EtcRadioBox from "../TodoRadioBox/EtcRadioBox";

const TodoInput = ({ setCreatedTodo, nowDate }) => {
  // useRef를 사용해서 nextId값을 설정
  // usRef 값을 받아올 때, nextId.current
  const nextId = useRef(4);
  const [text, setText] = useState(""); //input_text
  const [checked, setChecked] = useState("all"); //category_check
  const [etcValue, setEtcValue] = useState("");

  const handleChecked = (e) => {
    //category_radio
    setChecked(e.target.value);
    console.log(e.target.value);
  };

  const handleEtcValue = (e) => {
    //etc_text
    setEtcValue(e.target.value);
  };

  // 새로운 투두를 만들어서 저장
  const handleCreateTodo = () => {
    // 새로운 투두 객체를 생성
    if (checked !== "etc") {
      setCreatedTodo({
        id: nextId.current++,
        text: text,
        regDate: nowDate,
        category: checked,
        isCompleted: false,
      });
    } else {
      setCreatedTodo({
        id: nextId.current++,
        text: text,
        regDate: nowDate,
        category: `${checked}_${etcValue}`,
        isCompleted: false,
      });
    }
    // 저장하고 인풋 초기화
    setText("");
  };

  return (
    <S.InputContainer>
      <S.RadioBox>
        <S.RadioLabel>카테고리:</S.RadioLabel>
        <RadioBox
          name="category"
          value="all"
          text="전체"
          defaultChecked={checked === "all"}
          onChange={handleChecked}
        />
        <RadioBox
          name="category"
          value="daily"
          text="일상"
          defaultChecked={checked === "daily"}
          onChange={handleChecked}
        />
        <RadioBox
          name="category"
          value="study"
          text="공부"
          defaultChecked={checked === "study"}
          onChange={handleChecked}
        />
        <RadioBox
          name="category"
          value="hobby"
          text="취미"
          defaultChecked={checked === "hobby"}
          onChange={handleChecked}
        />
        <EtcRadioBox
          name="category"
          value="etc"
          text="기타"
          defaultChecked={checked === "etc"}
          onChange={handleChecked}
          handleEtcValue={handleEtcValue}
          etcValue={etcValue}
        />
      </S.RadioBox>
      <S.InputBox>
        <S.Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할일을 입력해주세요!"
        />
        <S.InputButton onClick={handleCreateTodo}>추가</S.InputButton>
      </S.InputBox>
    </S.InputContainer>
  );
};

TodoInput.PropsTypes = {
  setCreatedTodo: PropsTypes.func,
  nowDate: PropsTypes.string,
};

export default TodoInput;
