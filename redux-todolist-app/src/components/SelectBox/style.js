import styled from "styled-components";
export const SelectContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-width: 8rem;
  height: 3rem;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  margin-left: 1rem;
  background-color: #ffffff;
  border: 1px solid #f0eeed;
  box-shadow: 0 0.3px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
export const SelectLabel = styled.label`
  width: 100%;
`;
export const OptionList = styled.ul`
  position: absolute;
  top: 2.9rem;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.isShow ? "none" : "0")};
  color: #666666;
  border: 1px solid #f0eeed;
  border-top: none;
  border-bottom: none;
  background: #ffffff;
  cursor: pointer;
`;
export const Option = styled.li`
  width: 100%;
  border-bottom: 1px solid #f0eeed;
  padding: 0.7rem 0 0.3rem 0;
  font-size: 1.4rem;
`;
