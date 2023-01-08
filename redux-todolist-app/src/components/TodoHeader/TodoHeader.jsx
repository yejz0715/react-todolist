import React, { useState } from "react";
import * as S from "./headerStyle";
import RadioButton from "../RadioButton";
import EtcRadioButton from "../EtcRadioButton";
const TodoHeader = ({ date }) => {
  const [checked, setChecked] = useState("all");
  const handleChecked = (e) => {
    setChecked(e.target.value);
    console.log(e.target.value);
  };
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>TODOLIST</S.HeaderTitle>
      <S.HeaderDate>{date}</S.HeaderDate>
      <S.DetailsBox>
        <S.DetailsSummary>details</S.DetailsSummary>
        <S.RadioBox>
          할일:
          <RadioButton
            name="isComplete"
            value="all"
            text="전체"
            defaultChecked={true}
          />
          <RadioButton
            name="isComplete"
            value="complete"
            text="완료"
            defaultChecked={false}
          />
          <RadioButton
            name="isComplete"
            value="inComplete"
            text="미완료"
            defaultChecked={false}
          />
        </S.RadioBox>
        <S.RadioBox>
          카테고리:
          <RadioButton
            name="category"
            value="all"
            text="전체"
            defaultChecked={checked === "all"}
            onChange={handleChecked}
          />
          <RadioButton
            name="category"
            value="daily"
            text="일상"
            defaultChecked={checked === "daily"}
            onChange={handleChecked}
          />
          <RadioButton
            name="category"
            value="study"
            text="공부"
            defaultChecked={checked === "study"}
            onChange={handleChecked}
          />
          <RadioButton
            name="category"
            value="hobby"
            text="취미"
            defaultChecked={checked === "hobby"}
            onChange={handleChecked}
          />
          <EtcRadioButton
            name="category"
            value="etc"
            text="기타"
            defaultChecked={checked === "etc"}
            onChange={handleChecked}
          />
        </S.RadioBox>
      </S.DetailsBox>
    </S.HeaderContainer>
  );
};
export default TodoHeader;
