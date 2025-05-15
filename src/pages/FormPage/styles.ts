import styled from 'styled-components';

export const PageWrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  gap: 50px;
`;

export const FormBuilderContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  border: 1px solid rgb(216, 216, 216);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  gap: 30px;
  background-color: #ffffff;
`;

export const FormBuilderFieldsSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 20px;
  gap: 10px;
`;

export const GoBackButtonSC = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  padding: 10px;
  transition: 0.2s;
  color: rgb(80, 80, 80);

  &:hover {
    color: #000000;
  }
`;
