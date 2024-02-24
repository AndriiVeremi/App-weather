import styled from '@emotion/styled';

export const WeeckItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #333;
  border-radius: 10px;
  background-color: #2293ee;
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

export const DataTextWrapper = styled.p`
display: flex;
flex-direction: column;
align-items: center;
`;
