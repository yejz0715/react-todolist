import React from "react";
import PropsTypes from "prop-types";
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

RadioBox.PropsTypes = {
  value: PropsTypes.string,
  text: PropsTypes.string,
  name: PropsTypes.string,
  onChange: PropsTypes.bool,
  defaultChecked: PropsTypes.func,
};

export default RadioBox;
