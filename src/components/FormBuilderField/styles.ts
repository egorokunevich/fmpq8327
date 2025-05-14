import styled from 'styled-components';

export const FormBuilderFieldSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 20px;
`;

export const FormBuilderLabelSC = styled.label`
  display: flex;
  justify-content: flex-end;
`;

export const FormBuilderInputSC = styled.input`
  display: flex;
  justify-content: flex-start;
  background-color: transparent;
  outline: none;
  border: none;
  max-width: 50px;
  border-bottom: 1px solid black;
`;
