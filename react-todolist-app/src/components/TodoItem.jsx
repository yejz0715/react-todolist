import { React, useState } from "react";
import styled from "styled-components";
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
    <Container>
      <input type="checkbox" onChange={handleChecked} checked={check} />
      id: {id} <br /> regDate : {regDate} <br />
      text:
      <input
        type="text"
        defaultValue={updateText}
        readOnly={readOnly}
        onChange={handleText}
      ></input>
      <br />
      category: {category} <br />
      <button onClick={handleDeleteTodo}>{!readOnly ? "취소" : "삭제"}</button>
      <button onClick={handleUpdateTodo}>{!readOnly ? "확인" : "수정"}</button>
    </Container>
  );
};
export default TodoItem;

const Container = styled.div`
  background-color: pink;
  margin-bottom: 12px;
`;
