import React, { useState } from "react";
import { useRef } from "react";
import * as S from "./inputStyle";

const TodoInput = ({ setCreatedTodo }) => {
  // useRef를 사용해서 nextId값을 설정
  // usRef 값을 받아올 때, nextId.current
  const [text, setText] = useState("");
  const nextId = useRef(4);

  // 새로운 투두를 만들어서 저장
  const handleCreateTodo = () => {
    // 새로운 투두 객체를 생성
    setCreatedTodo({
      id: nextId.current++,
      text: text,
      regDate: "",
      category: "",
      isCompleted: false,
    });
    // 저장하고 인풋 초기화
    setText("");
  };

  return (
    <S.InputBox>
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
export default TodoInput;
