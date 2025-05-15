import { PropsWithChildren } from 'react';
import { FormBuilderFieldSC, FormBuilderInputSC, FormBuilderLabelSC } from './styles';

interface IFormBuilderFieldProps extends PropsWithChildren {
  label: string;
  count: number;
  setCount: (count: number) => void;
}

const FormBuilderField = ({ label, count, setCount }: IFormBuilderFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  return (
    <FormBuilderFieldSC>
      <FormBuilderLabelSC>{label}</FormBuilderLabelSC>
      <FormBuilderInputSC type="number" min={0} value={count} onChange={handleChange} />
    </FormBuilderFieldSC>
  );
};

export default FormBuilderField;
