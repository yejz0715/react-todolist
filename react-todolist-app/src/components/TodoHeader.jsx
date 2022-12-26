import React from "react";
import * as S from "../style/headerStyle";
const TodoHeader = () => {
  return (
    <S.HeaderContainer>
      TODOLIST
      <br />
      2022-12-31 토요일
      <br />
      할일:완료, 미완료 category:일상
    </S.HeaderContainer>
  );
};
export default TodoHeader;
