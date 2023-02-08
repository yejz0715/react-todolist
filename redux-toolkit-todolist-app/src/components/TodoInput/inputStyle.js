import styled from "styled-components";
import { MdOutlineAddBox } from "react-icons/md";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 56rem;
  background-color: #fff;
  padding: 2rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 992px) {
    min-width: 50rem;
  }
`;

export const NowDate = styled.p`
  font-size: 2rem;
  padding-bottom: 1rem;
`;

export const RadioBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;
export const RadioLabel = styled.label`
  height: 2.5rem;
  background-color: transparent;
  font-size: 2rem;
`;
export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
export const Input = styled.input`
  width: 100%;
  max-width: 45rem;
  padding: 0.8rem;
  border-bottom: 2px solid gray;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

export const InputButton = styled(MdOutlineAddBox)`
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 2rem;
  cursor: pointer;
`;
