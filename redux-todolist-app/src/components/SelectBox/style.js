import styled from "styled-components";
export const SelectContainer = styled.div`
  // display: block;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: pink;
  width: 8rem;
  font-size: 2rem;
  margin: 0 1rem;
  cursor: pointer;
  height: 3rem;
`;
export const SelectLabel = styled.label`
  padding: 1rem 0 0 0.7rem;
`;
export const OptionList = styled.ul`
  display: inline;
  position: absolute;
  overflow: hidden;
  width: 100%;
  max-height: ${(props) => (props.isShow ? "none" : "0")};
  background-color: pink;
  cursor: pointer;
`;
export const Option = styled.li`
  text-align: 10rem;
  border-bottom: 0.5rem solid beige;
  padding: 1rem 0 0 0.7rem;
  margin: 0 auto;
`;
