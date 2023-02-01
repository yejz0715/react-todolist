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
  justify-content: space-evenly;
  padding: 0.5rem 0;
  background-color: ${(props) => (props.checked ? "#65647C" : "#FFF2F2")};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1rem;
`;
//체크
export const Checked = styled(RiCheckboxFill)`
  cursor: pointer;
  width: 2.8rem;
  height: 2.8rem;
`;

export const UnChecked = styled(RiCheckboxBlankLine)`
  cursor: pointer;
  width: 2.8rem;
  height: 2.8rem;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  background-color: transparent;
  font-size: 1.9rem;
`;
export const ItemInput = styled.input`
  border-bottom: 1px dashed gray;
  width: 27rem;
  padding-top: 0.6rem;
  padding-bottom: 0;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  font-size: 1.6rem;
`;
export const ItemButtonBox = styled.div`
  display: flex;
`;
//삭제
export const Delete = styled(RiDeleteBin2Fill)`
  cursor: pointer;
  width: 3.3rem;
  height: 3.3rem;
  margin-right: 0.5rem;
  &:hover {
    color: #f190b7;
  }
`;
//수정
export const Update = styled(RiDraftFill)`
  cursor: pointer;
  width: 3.3rem;
  height: 3.3rem;
  margin-right: 0.5rem;

  &:hover {
    color: #f190b7;
  }
`;
//저장취소
export const IconBox = styled.div`
  cursor: pointer;
  padding: 0 0.15rem;
  width: 3rem;
  height: 3rem;
  font-size: 1.6rem;
  line-height: 3.3rem;
  background-color: #333333;
  color: #ffc0cb;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
  &:hover {
    background-color: white;
  }
`;
