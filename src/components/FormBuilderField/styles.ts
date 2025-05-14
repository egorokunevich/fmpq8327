import styled from 'styled-components';

export const FormBuilderFieldSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
`;

export const FormBuilderLabelSC = styled.label`
  display: flex;
  justify-content: flex-end;
`;

export const FormBuilderInputSC = styled.input`
  display: flex;
  justify-content: flex-start;
`;
