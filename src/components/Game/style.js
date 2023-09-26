import styled from 'styled-components';

export const GameUi = styled.body`
  font: 16px 'Century Gothic', Futura, sans-serif;
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: #e6f3fb;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

export const Rules = styled.footer`
  font: 10px 'Century Gothic', Futura, sans-serif;
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  background-color: white;
  padding: 5px;
`;
