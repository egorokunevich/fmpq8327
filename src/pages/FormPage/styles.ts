import styled from 'styled-components';

export const HeaderSC = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgb(72, 73, 66);
`;

export const PageWrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderButtonSC = styled.button`
  padding: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #d5e1a3;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #e2f89c;
  }
`;

export const FormBuilderContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 20px;
`;
