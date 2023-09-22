import styled from "styled-components";

export const SquareUI = styled.button`
  color: white;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 50px;
  width: 50px;
  margin-right: 1px;
  margin-top: 1px;
  padding: 0;
  text-align: center;
  background-color: #444;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-radius: 18px;
    border: 2px solid #999;
    background-color: rgb(220, 220, 220);
    color: red;
  }

  &:focus {
    outline: none;
  }
`;
