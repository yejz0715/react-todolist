import styled from "styled-components";
export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 7rem;
  height: 2.5rem;
  padding-top: 0.5rem;
  margin-left: 0.5rem;
  background-color: ${(props) =>
    props.defaultChecked ? "#ada2ff" : "#FFD4B2"};
  color: ${(props) => (props.defaultChecked ? "#222" : "#222")};
  border-radius: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #ada2ff;
  }
`;

export const RadioInput = styled.input`
  display: none;

  &:checked {
    display: none;
  }
`;
