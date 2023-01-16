import styled from "styled-components";
import { MdOutlineAddBox } from "react-icons/md";

export const InputContainer = styled.div`
  background-color: #e8f3d6;
  padding: 1.5rem;
  width: 55rem;
`;
export const RadioBox = styled.div`
  margin-bottom: 2rem;
  display: flex;
`;
export const RadioLabel = styled.label`
  width: 8rem;
  height: 2.5rem;
  padding-top: 0.5rem;
  margin-left: 0.5rem;
  background-color: yellow;
  border-radius: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
`;
export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  margin-top: 5rem;
`;
export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-bottom: 2px solid gray;
  font-size: 1rem;
`;

export const InputButton = styled(MdOutlineAddBox)`
  width: 2rem;
  height: 2rem;
  margin-left: 6px;
  cursor: pointer;
`;
