import styled from "styled-components";
export const TemplateBlock = styled.div`
  background-color: transparent;
  margin: 1.5rem;
  margin-top: 5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 991px) {
    margin-top: 2rem;
    box-shadow: none;
  }
`;
