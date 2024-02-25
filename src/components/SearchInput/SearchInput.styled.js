import styled from '@emotion/styled';

export const SearchFormContainer = styled.div``;

export const Forma = styled.form`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 15px;
  color: #184f8c;
  border: 1px solid #184f8c;
  background-color: #fff;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-size: 16px;
  &:hover {
    background-color: #e4edfa;
  }
`;

export const Input = styled.input`
  height: 50px;
  width: 350px;
  border: 1px solid #3d692c;
  border-radius: 10px;
  padding: 0px 15px;
  font-size: 16px;
`;
