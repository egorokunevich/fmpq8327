import styled from 'styled-components';

export const ButtonSC = styled.button`
  border: 1px solid rgb(207, 207, 207);
  outline: none;
  font-size: 20px;
  padding: 10px 20px;
  background-color: rgb(255, 255, 255);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #e2f89c;
  }

  &:disabled {
    background-color: rgb(212, 212, 212);
    cursor: default;
  }
`;
