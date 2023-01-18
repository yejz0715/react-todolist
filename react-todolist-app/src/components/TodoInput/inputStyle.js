import styled from "styled-components";
import { MdOutlineAddBox } from "react-icons/md";

export const InputContainer = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 0.5rem;
`;
export const RadioBox = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;
export const RadioLabel = styled.label`
  width: 8rem;
  height: 2.5rem;
  padding-top: 0.5rem;
  margin-left: 0.5rem;
  background-color: transparent;
  border-radius: 1.5rem;
  font-size: 2rem;
  text-align: center;
`;
export const InputBox = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 5rem;
`;
export const Input = styled.input`
  width: 45rem;
  padding: 0.8rem;
  border-bottom: 2px solid gray;
  font-size: 1.6rem;
`;

export const InputButton = styled(MdOutlineAddBox)`
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 2rem;
  cursor: pointer;
`;
