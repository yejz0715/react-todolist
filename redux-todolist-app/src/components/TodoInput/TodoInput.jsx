import React, { useState } from "react";
import { useRef } from "react";
import * as S from "./inputStyle";
import PropsTypes from "prop-types";

const TodoInput = ({ setCreatedTodo }) => {
  // useRef를 사용해서 nextId값을 설정
  // usRef 값을 받아올 때, nextId.current
  const [text, setText] = useState("");
  const nextId = useRef(4);
  const [selected, setSelected] = useState("");

  // 새로운 투두를 만들어서 저장
  const handleCreateTodo = () => {
    // 새로운 투두 객체를 생성
    setCreatedTodo({
      id: nextId.current++,
      text: text,
      regDate: "",
      category: selected,
      isCompleted: false,
    });
    // 저장하고 인풋 초기화
    setText("");
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <S.InputBox>
      <S.Select onChange={handleSelect}>
        <S.Option value="none">선택</S.Option>
        <S.Option value="일상">일상</S.Option>
        <S.Option value="공부">공부</S.Option>
        <S.Option value="취미">취미</S.Option>
        <S.Option value="기타">기타</S.Option>
      </S.Select>
      <S.Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할일을 입력해주세요!"
      />
      <S.InputButton onClick={handleCreateTodo}>추가</S.InputButton>
    </S.InputBox>
  );
};

TodoInput.PropsTypes = {
  setCreatedTodo: PropsTypes.object,
};

export default TodoInput;
