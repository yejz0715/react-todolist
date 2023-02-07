import styled from "styled-components";
export const TodoContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f9f9f9;
  padding: 1.7rem;
  border-radius: 1rem;
  @media (max-width: 991px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TodoBlock = styled.div`
  width: 100%;
  padding-right: 2.5rem;

  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;
export const HeaderTitle = styled.p`
  padding: 3rem;
  font-size: 7rem;
`;
export const MobileHeaderTitle = styled.p`
  font-size: 4rem;
`;

export const NowDate = styled.p`
  font-size: 3rem;
  color: brown;
  margin: 1.5rem;
  padding: 0.5rem;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
