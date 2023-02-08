import styled from "styled-components";
export const TemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1.5rem;
  margin-top: 5rem;
  background-color: transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 991px) {
    margin: 2rem 0 0 0;
    box-shadow: none;
  }
`;
