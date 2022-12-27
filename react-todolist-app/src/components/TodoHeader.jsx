import React from "react";
import * as S from "../style/headerStyle";
const TodoHeader = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>TODOLIST</S.HeaderTitle>
      <br />
      <S.HeaderDate>2022-12-31 토요일</S.HeaderDate>
      <S.CategoryBox>
        <S.DetailsSummary>details</S.DetailsSummary>
        <S.DetailsUl>
          {" "}
          <S.DetailsLi>할일 : 완료, 미완료 </S.DetailsLi>
          <S.DetailsLi>category : 전체, 일상, 공부, 취미, 기타</S.DetailsLi>
        </S.DetailsUl>
      </S.CategoryBox>
    </S.HeaderContainer>
  );
};
export default TodoHeader;
