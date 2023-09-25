import styled from 'styled-components';

export const PlayAgainButton = styled.button`
  display: flex;
  align-items: center;
  margin: 10px auto;
  height: 30px;
  background-color: blue;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  text-transform: uppercase;
  font-size: 1rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const ButtonImageUi = styled.img`
  width: 25px;
  height: 25px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonUi = styled.button`
  margin: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 0.3cm;
  box-shadow: 5px 2px 2px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
