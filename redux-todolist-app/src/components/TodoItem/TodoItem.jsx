import { React, useState } from "react";
import * as S from "./itemStyle";
import PropsTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo, toggleTodo } from "../../modules/todo";
const TodoItem = ({ id, text, regDate, category, isCompleted }) => {
  const [updateText, setUpdateText] = useState(text); //변경된 내용
  const [readOnly, setReadOnly] = useState(true);
  const dispatch = useDispatch();

  const handleChecked = () => {
    dispatch(toggleTodo(id));
  };

  const handleText = (e) => {
    setUpdateText(e.target.value);
  };

  //삭제
  const handleDeleteTodo = () => {
    if (readOnly) {
      dispatch(deleteTodo(id));
    } else {
      setReadOnly((prev) => !prev);
    }
  };

  //수정
  const handleUpdateTodo = () => {
    if (!readOnly) {
      dispatch(updateTodo(id, updateText));
    }
    setReadOnly((prev) => !prev);
  };

  return (
    <S.ItemContainer checked={isCompleted}>
      <div onClick={handleChecked}>
        {isCompleted ? <S.Checked /> : <S.UnChecked />}
      </div>
      <br />
      <S.ItemBox>
        {regDate} <br />
        <S.ItemInput
          defaultValue={updateText}
          readOnly={readOnly}
          onChange={handleText}
          checked={isCompleted}
        />
        <br />
        <div>
          category:{" "}
          {category === "기타" ? (
            <input type="text" placeholder="기타" readOnly={readOnly} />
          ) : (
            category
          )}{" "}
        </div>
        <br />
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
TodoItem.PropsTypes = {
  id: PropsTypes.number,
  text: PropsTypes.string,
  regDate: PropsTypes.string,
  category: PropsTypes.string,
  isCompleted: PropsTypes.bool,
};
export default TodoItem;
