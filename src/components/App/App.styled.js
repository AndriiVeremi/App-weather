import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px 20px 0px 20px;
  margin: 0 auto;
  filter: drop-shadow(4px 4px 50px #333);

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 30px 34px 0px 34px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 60px 65px 0px 65px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 30px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const InfoWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    /* width: 650px; */
    width: 450px;
  }
`;

export const Error = styled.span`
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 60px;
  display: flex;
  justify-content: center;
  padding: 200px 0px;
  border-radius: 10px;
  color: #184474;
`;
