import { useState } from 'react';
import {
  FormBuilderContainerSC,
  FormBuilderFieldsSC,
  GoBackButtonSC,
  PageWrapperSC,
} from './styles';
import FormBuilderField from '../../components/FormBuilderField/FormBuilderField';
import { ReactComponent as BackIcon } from '../../assets/backIcon.svg';
import Form, { IFormData } from '../../components/Form/Form';
import { Button } from '../../components/Button/Button';

interface IFormPageProps {
  navigate: (url: string) => void;
}

const initialFormData: IFormData = {
  inputsCount: 0,
  checkboxesCount: 0,
  textAreasCount: 0,
};

const FormPage = ({ navigate }: IFormPageProps) => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [formConfig, setFormConfig] = useState<IFormData | null>(null);

  const handleBuildClick = () => {
    if (Object.values(formData).some(value => value !== 0)) {
      setFormConfig({ ...formData });
    }
  };

  return (
    <div>
      <GoBackButtonSC onClick={() => navigate('/')}>
        <BackIcon />
      </GoBackButtonSC>
      <PageWrapperSC>
        <FormBuilderContainerSC>
          <FormBuilderFieldsSC>
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
          </FormBuilderFieldsSC>
          <Button
            onClick={handleBuildClick}
            disabled={
              !formData.checkboxesCount && !formData.inputsCount && !formData.textAreasCount
            }>
            BUILD
          </Button>
        </FormBuilderContainerSC>
        <Form config={formConfig} />
      </PageWrapperSC>
    </div>
  );
};

export default FormPage;
