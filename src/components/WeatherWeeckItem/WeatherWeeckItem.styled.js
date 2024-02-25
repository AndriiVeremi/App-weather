import styled from '@emotion/styled';

export const WeeckItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  &:hover {
    scale: 0.97;
  }
`;

export const ItemImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DataText = styled.p`
  font-family: 'Montserrat';
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;

export const DataTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TempText = styled.p`
  font-family: 'Montserrat';
  font-size: 18px;
  display: flex;
  gap: 10px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const ColorText = styled.span`
  font-family: 'Montserrat';
  font-size: 18px;
  color: #163355;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const DascriptionText = styled.span`
  font-family: 'Montserrat';
  font-size: 16px;
  color: #163355;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
