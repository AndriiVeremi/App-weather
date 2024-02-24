import styled from '@emotion/styled';

export const SearchFormContainer = styled.div``;

export const Forma = styled.form`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px;
  color: #3d692c;
  border: 1px solid #3d692c;
  background-color: #fff;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-size: 16px;
  &:hover {
    background-color: #e9f5e3;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 350px;
  border: 1px solid #3d692c;
  border-radius: 10px;
  padding: 0px 15px;
  font-size: 16px;
`;
