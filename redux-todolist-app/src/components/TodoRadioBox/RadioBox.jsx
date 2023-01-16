import React from "react";
import * as S from "./style";

const RadioBox = ({ value, text, name, onChange, defaultChecked }) => {
  return (
    <S.RadioLabel defaultChecked={defaultChecked}>
      <S.RadioInput
        type="radio"
        value={value}
        onChange={onChange}
        text={text}
        name={name}
        defaultChecked={defaultChecked}
      />
      {text}
    </S.RadioLabel>
  );
};
export default RadioBox;
