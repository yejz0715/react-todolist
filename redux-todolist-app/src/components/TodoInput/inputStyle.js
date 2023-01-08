import styled from "styled-components";
import { MdOutlineAddBox } from "react-icons/md";
export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
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
