import React from "react";
import styled from "styled-components";
import RadioBox from "./RadioBox";

const EtcRadioBox = ({
  name,
  value,
  text,
  defaultChecked,
  onChange,
  handleEtcValue,
  etcValue,
}) => {
  return (
    <EtcContainer>
      <RadioBox
        name={name}
        value={value}
        text={text}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      {defaultChecked ? (
        <RadioInput type="text" value={etcValue} onChange={handleEtcValue} />
      ) : null}
    </EtcContainer>
  );
};
export const RadioInput = styled.input`
  width: 5rem;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;
export const EtcContainer = styled.div`
  display: flex;
  &:checked {
    ${RadioInput} {
      display: none;
    }
  }
`;

export default EtcRadioBox;
