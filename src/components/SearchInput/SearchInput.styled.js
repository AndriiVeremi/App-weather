import styled from '@emotion/styled';

export const SearchFormContainer = styled.div``;

export const Forma = styled.form`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Button = styled.button`
font-family: 'Montserrat';
  padding: 10px;
  color: #fff;
  border: none;
  background-color: #184474;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-size: 18px;
  &:hover {
    background-color: #163355;
  }
`;

export const Input = styled.input`
font-family: 'Montserrat';
  height: 45px;
  width: 170px;
  border: 1px solid #184f8c;
  border-radius: 10px;
  padding: 0px 15px;
  font-size: 16px;
  color: #184f8c;

  @media screen and (min-width: 768px) {
    width: 300px;
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 350px;
}
`;
