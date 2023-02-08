import styled from "styled-components";
export const SelectContainer = styled.div`
  display: block;
  position: relative;
  background-color: #fefbf3;
  width: 100%;
  max-width: 8rem;
  /* padding: 1rem; */
  font-size: 1.8rem;
  margin-left: 1rem;
  cursor: pointer;
  height: 3rem;
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  text-align: center;
  box-shadow: 0 0.3px 2px rgba(0, 0, 0, 0.2);
`;
export const SelectLabel = styled.label`
  width: 100%;
  font-size: 1.8rem;
`;
export const OptionList = styled.ul`
  width: 100%;
  position: absolute;
  overflow: hidden;
  max-height: ${(props) => (props.isShow ? "none" : "0")};
  background-color: white;
  cursor: pointer;
`;
export const Option = styled.li`
  width: 100%;
  border-bottom: 1px solid black;
  padding-top: 0.7rem;
`;
