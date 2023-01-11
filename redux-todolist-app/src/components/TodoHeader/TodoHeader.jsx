import React, { useState } from "react";
import * as S from "./headerStyle";
import RadioButton from "../TodoRadio/RadioButton";
const TodoHeader = () => {
  const [checked, setChecked] = useState("all");
  const handleChecked = (e) => {
    setChecked(e.target.value);
    console.log(e.target.value);
  };
  return (
    <S.HeaderContainer>
      <S.RadioBox>
        할일:
        <RadioButton
          name="isComplete"
          value="all"
          text="전체"
          defaultChecked={checked === "all"}
          onChange={handleChecked}
        />
        <RadioButton
          name="isComplete"
          value="complete"
          text="완료"
          defaultChecked={checked === "complete"}
          onChange={handleChecked}
        />
        <RadioButton
          name="isComplete"
          value="inComplete"
          text="미완료"
          defaultChecked={checked === "inComplete"}
          onChange={handleChecked}
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
        <RadioButton
          name="category"
          value="etc"
          text="기타"
          defaultChecked={checked === "etc"}
          onChange={handleChecked}
        />
      </S.RadioBox>
    </S.HeaderContainer>
  );
};
export default TodoHeader;
