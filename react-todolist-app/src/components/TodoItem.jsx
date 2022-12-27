import { React, useState } from "react";

import {
  RiDeleteBin2Fill, //삭제
  RiDraftFill, //수정
} from "react-icons/ri";

import * as S from "../style/itemStyle";
const TodoItem = ({
  list,
  setList,
  id,
  text,
  regDate,
  category,
  isCompleted,
}) => {
  const [updateText, setUpdateText] = useState(text); //변경된 내용
  const [readOnly, setReadOnly] = useState(true);
  const [check, setCheck] = useState(isCompleted);
  const handleChecked = () => {
    setCheck((prev) => !prev);
  };

  const handleDeleteTodo = () => {
    if (readOnly) {
      setList(list.filter((todo) => todo.id !== id));
    } else {
      setReadOnly((prev) => !prev);
    }
  };
  const handleUpdateTodo = () => {
    setReadOnly((prev) => !prev);
  };

  const handleText = (e) => {
    setUpdateText(e.target.value);
  };

  return (
    <S.ItemContainer>
      <div onClick={handleChecked}>
        {check ? <S.Checked /> : <S.UnChecked />}
      </div>
      <br />
      <S.ItemBox>
        {regDate} <br />
        <S.ItemInput
          type="text"
          defaultValue={updateText}
          readOnly={readOnly}
          onChange={handleText}
        />
        <br />
        category: {category} <br />
      </S.ItemBox>
      <S.ItemButtonBox>
        <div onClick={handleUpdateTodo}>
          {!readOnly ? <S.IconBox>저장</S.IconBox> : <S.Update />}
        </div>
        <div onClick={handleDeleteTodo}>
          {!readOnly ? <S.IconBox>취소</S.IconBox> : <S.Delete />}
        </div>
      </S.ItemButtonBox>
    </S.ItemContainer>
  );
};
export default TodoItem;
