import React from "react";
import PropsTypes from "prop-types";
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
RadioBox.PropsTypes = {
  value: PropsTypes.string,
  text: PropsTypes.string,
  name: PropsTypes.string,
  onChange: PropsTypes.bool,
  defaultChecked: PropsTypes.func,
  handleEtcValue: PropsTypes.func,
  etcValue: PropsTypes.string,
};
export default EtcRadioBox;
