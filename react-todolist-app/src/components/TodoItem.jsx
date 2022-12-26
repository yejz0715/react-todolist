import { React, useState } from "react";
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
      <S.ItemCheck type="checkbox" onChange={handleChecked} checked={check} />
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
      <S.ItemButton onClick={handleDeleteTodo}>
        {!readOnly ? "취소" : "삭제"}
      </S.ItemButton>
      <S.ItemButton onClick={handleUpdateTodo}>
        {!readOnly ? "확인" : "수정"}
      </S.ItemButton>
    </S.ItemContainer>
  );
};
export default TodoItem;
