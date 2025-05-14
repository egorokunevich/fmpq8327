import { useState } from 'react';
import Button from '../../components/Button/Button';
import { FormBuilderContainerSC, HeaderButtonSC, HeaderSC, PageWrapperSC } from './styles';
import FormBuilderField from '../../components/FormBuilderField/FormBuilderField';

interface IFormPageProps {
  navigate: (url: string) => void;
}

interface IFormData {
  inputsCount: number;
  textAreasCount: number;
  checkboxesCount: number;
}

const initialFormData = {
  inputsCount: 0,
  checkboxesCount: 0,
  textAreasCount: 0,
};

const FormPage = ({ navigate }: IFormPageProps) => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const buildForm = () => {
    console.log(formData);
  };

  return (
    <div>
      <HeaderSC>
        <HeaderButtonSC onClick={() => navigate('/')}>Home</HeaderButtonSC>
      </HeaderSC>
      <PageWrapperSC>
        <FormBuilderContainerSC>
          <FormBuilderField
            label={'Input'}
            count={formData.inputsCount}
            setCount={count => setFormData(prev => ({ ...prev, inputsCount: count }))}
          />
          <FormBuilderField
            label={'TextArea'}
            count={formData.textAreasCount}
            setCount={count => setFormData(prev => ({ ...prev, textAreasCount: count }))}
          />
          <FormBuilderField
            label={'Checkbox'}
            count={formData.checkboxesCount}
            setCount={count => setFormData(prev => ({ ...prev, checkboxesCount: count }))}
          />
          <Button onClick={buildForm}>BUILD</Button>
        </FormBuilderContainerSC>
      </PageWrapperSC>
    </div>
  );
};

export default FormPage;
