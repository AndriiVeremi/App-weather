import styled from '@emotion/styled'

export const Wrapper = styled.div`
width: 100%;
 border: none;
 height: 600px;
 border-radius: 10px;
 padding: 30px;
 background-color: rgba(255, 255, 255, 0.6);
`;

export const NameCity = styled.h1`
font-family: 'Montserrat';
font-size: 80px;
line-height: 1;
color: #163355;
margin-bottom: 30px;
`;

export const List = styled.ul`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: space-around;
gap: 10px;
height: 250px;
width: 100%;
`;

export const Items = styled.li`
display: flex;
height: 60px;
gap: 10px;
align-items: center;
`;

export const TempWrapper = styled.div`
display: flex;
gap: 30px;
align-items: center;
margin-bottom: 30px;
justify-content: flex-end;
margin-bottom: 60px;
`;

export const FlexWrapper = styled.div`
display: flex;
flex-direction: column;
line-height: 1;
align-items: center;
`;

export const Temp = styled.span`
font-family: 'Montserrat';
font-size: 120px;
font-weight: 700;
color: #163355;
`;

export const TempFeel = styled.span`
font-family: 'Montserrat';
font-size: 24px;
margin: 0;
color: #163355;
`;

export const OtherDesc = styled.div`
border-top: 1px solid #333;
display: flex;
gap: 30px;
padding-top: 50px;
`;

export const TextDesc = styled.div`
font-family: 'Montserrat';
margin: 0;
font-size: 30px;
color: #163355;
`;

export const Text = styled.p`
font-family: 'Montserrat';
margin: 0;
font-size: 22px;
color: #163355;
`;

export const TextSpan = styled.span`
font-weight: 700;
font-size: 28px;
`;

