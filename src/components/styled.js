import { Text, Button, Card, Image } from 'rebass';
import styled from 'styled-components';

export const PeopleMain = styled.div`
  text-align: center;
  border: 1px solid white;
  width: 80vw;
  height: auto;
  box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.5);
  background: #f6f6f6;
  padding-bottom: 60px;
  margin: 40px auto;
`;

export const PeopleContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const PeopleContent = styled(Card)`
  width: 75%;
  margin: 0 auto;
  font-weight: bold;
`;

export const PeopleHeader = styled.h1`
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, Ebrima, Fira Sans, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  margin: 70px auto 30px;
`;

export const PeopleItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PeopleItemText = styled.p`
  width: 90%;
  background-color: white;
  border: 1px solid lightgrey;
  box-shadow: 1px 1px 1px lightgrey;
  padding: 12px;
  margin-right: 10px;
`;

export const PeopleItemDelete = styled(Button)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: #ff7373;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #c70202;
  color: white;
  font-size: 18px;
  margin-right: 5px;
  &:hover {
    box-shadow: none;
    margin-top: 1px;
    margin-left: 1px;
  }
`;

export const PeopleAdd = styled(Button)`
  color: white;
  font-size: 2em;
  width: 40px;
  height: 40px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #73ff73;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #47a947;
  margin: 20px auto 0;
`;

export const Input = styled.input`
  opacity: 1;
  cursor: pointer;
  height: 24px;
  margin: auto;
  width: 50%;
`;

export const Content = styled(Text)`
  color: #000000;
  font-size: 12px;
  line-height: 20px;
  font-family: Ebrima;
  & a {
    color: #000000;
  }
`;

export const ImgLogo = styled(Image)`
  width: 50px;
  position: relative;
  top: 50px;
  display: inline-block;
  max-width: 20%;
  max-height: 40px;
`;
