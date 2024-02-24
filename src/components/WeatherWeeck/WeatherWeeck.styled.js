import styled from '@emotion/styled';

export const WeathersListWrappre = styled.div`
  height: 470px;
  overflow-x: hidden;
  overflow-y: scroll;

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
