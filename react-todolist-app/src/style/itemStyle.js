import styled from "styled-components";
import {
  RiCheckboxFill, //체크o
  RiCheckboxBlankLine, //x
  RiDeleteBin2Fill, //삭제
  RiDraftFill, //수정
} from "react-icons/ri";
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: pink;
  margin-bottom: 1rem;
  line-height: 0.6rem;
`;
//체크
export const Checked = styled(RiCheckboxFill)`
  cursor: pointer;
  width: 1.4rem;
  height: 1.4rem;
`;
export const UnChecked = styled(RiCheckboxBlankLine)`
  cursor: pointer;
  width: 1.4rem;
  height: 1.4rem;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: 0 1rem;
`;
export const ItemInput = styled.input`
  border-bottom: 1px dashed gray;
  width: 20rem;
`;
export const ItemButtonBox = styled.div`
  display: flex;
  // background-color: red;
`;
//삭제
export const Delete = styled(RiDeleteBin2Fill)`
  cursor: pointer;
  width: 1.7rem;
  height: 1.7rem;
  margin-right: 0.5rem;
`;
//수정
export const Update = styled(RiDraftFill)`
  cursor: pointer;
  width: 1.7rem;
  height: 1.7rem;
  margin-right: 0.5rem;
`;
//저장취소
export const IconBox = styled.div`
  cursor: pointer;
  padding: 0 0.15rem;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 0.8rem;
  line-height: 1.9rem;
  background-color: #333333;
  color: #ffc0cb;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
`;
