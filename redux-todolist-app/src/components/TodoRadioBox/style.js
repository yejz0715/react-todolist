import styled from "styled-components";
export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 7rem;
  padding: 0.5rem 1rem 0 1rem;
  margin-left: 1rem;
  background-color: ${(props) =>
    props.defaultChecked ? "#ada2ff" : "#FFD4B2"};
  color: ${(props) => (props.defaultChecked ? "#222" : "#222")};
  border-radius: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #ada2ff;
  }
  margin: 0.3rem;
`;

export const RadioInput = styled.input`
  display: none;

  &:checked {
    display: none;
  }
`;
