import styled from '@emotion/styled';

export const SearchFormContainer = styled.div``;

export const Forma = styled.form`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Button = styled.button`
font-family: 'Montserrat';
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
font-family: 'Montserrat';
  height: 50px;
  width: 200px;
  border: 1px solid #184f8c;
  border-radius: 10px;
  padding: 0px 15px;
  font-size: 24px;
  color: #184f8c;

  @media screen and (min-width: 768px) {
    width: 350px;
}
`;
