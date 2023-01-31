import styled from "styled-components";
export const TodoContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  background-color: #f9f9f9;
  padding: 1.7rem;
  border-radius: 1rem;

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TodoBlock = styled.div`
  padding-right: 2.5rem;
`;
export const HeaderTitle = styled.p`
  padding: 3rem;
  font-size: 7rem;
`;
export const MobileHeaderTitle = styled.p`
  font-size: 7rem;
`;

export const NowDate = styled.p`
  font-size: 3rem;
  color: brown;
  margin: 1.5rem;
  padding: 0.5rem;
`;
