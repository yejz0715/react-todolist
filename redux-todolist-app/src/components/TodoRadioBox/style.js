import styled from "styled-components";
export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  width: 7rem;
  height: 2.5rem;
  padding-top: 0.5rem;
  margin-left: 0.5rem;
  background-color: ${(props) => (props.defaultChecked ? "red" : "#e6e6e6")};
  color: ${(props) => (props.defaultChecked ? "black" : "#777")};
  border-radius: 1.5rem;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  display: none;

  &:checked {
    display: none;
  }
`;
