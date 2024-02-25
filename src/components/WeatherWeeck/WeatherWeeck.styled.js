import styled from '@emotion/styled';

export const WeathersListWrapper = styled.div`
  height: 660px;
  overflow-x: hidden;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    height: 500px;
}

  @media screen and (min-width: 1280px) {    
    height: 470px;
}

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const WeathersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
