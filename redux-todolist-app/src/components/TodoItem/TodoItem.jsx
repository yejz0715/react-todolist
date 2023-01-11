import { React, useState } from "react";
import * as S from "./itemStyle";
import PropsTypes from "prop-types";
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
  const [checked, setCheck] = useState(isCompleted);
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
    <S.ItemContainer checked={checked}>
      <div onClick={handleChecked}>
        {checked ? <S.Checked /> : <S.UnChecked />}
      </div>
      <br />
      <S.ItemBox>
        {regDate} <br />
        <S.ItemInput
          defaultValue={updateText}
          readOnly={readOnly}
          onChange={handleText}
          checked={checked}
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
  list: PropsTypes.object,
  setList: PropsTypes.func,
  id: PropsTypes.number,
  text: PropsTypes.string,
  regDate: PropsTypes.string,
  category: PropsTypes.string,
  isCompleted: PropsTypes.bool,
};
export default TodoItem;
