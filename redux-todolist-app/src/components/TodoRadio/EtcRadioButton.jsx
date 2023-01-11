import React from "react";
import styled from "styled-components";
import RadioButton from "./RadioButton";

const EtcRadioButton = ({ name, value, text, defaultChecked, onChange }) => {
  return (
    <div>
      <RadioButton
        name={name}
        value={value}
        text={text}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      {defaultChecked ? <RadioInput type="text" /> : null}
    </div>
  );
};
export const RadioInput = styled.input`
  width: 5rem;
  border-bottom: 1px solid gray;
`;

export default EtcRadioButton;
