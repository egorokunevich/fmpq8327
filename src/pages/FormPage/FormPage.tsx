import { useState } from 'react';
import Button from '../../components/Button/Button';
import {
  FormBuilderContainerSC,
  FormBuilderFieldsSC,
  FormSC,
  GoBackButtonSC,
  PageWrapperSC,
} from './styles';
import FormBuilderField from '../../components/FormBuilderField/FormBuilderField';
import { ReactComponent as BackIcon } from '../../assets/backIcon.svg';

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
  const [displayedForm, setDisplayedForm] = useState<IFormData | null>(null);

  const renderForm = () => {
    if (!displayedForm) {
      if (Object.values(formData).every(value => value === 0)) {
        return <div>Please, define form properties!</div>;
      }
    } else {
      return <FormSC>{renderFormElements()}</FormSC>;
    }
  };

  const renderFormElements = () => {
    if (displayedForm) {
      return Object.entries(displayedForm).map(([key, count]) => {
        if (count > 0) {
          const elements = [];

          for (let i = 1; i < count + 1; i++) {
            elements.push(getFormElementByKey(key, i));
          }

          return elements;
        } else {
          return null;
        }
      });
    }
  };

  const getFormElementByKey = (key: string, id: number) => {
    let element = <div>x</div>;

    switch (key) {
      case 'inputsCount':
        element = <input key={`${key} ${id}`} />;
        break;
      case 'textAreasCount':
        element = <textarea key={`${key} ${id}`} />;
        break;
      case 'checkboxesCount':
        element = <input key={`${key} ${id}`} type="checkbox" />;
        break;
      default:
        break;
    }

    return element;
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
            onClick={() => setDisplayedForm({ ...formData })}
            disabled={
              !formData.checkboxesCount && !formData.inputsCount && !formData.textAreasCount
            }>
            BUILD
          </Button>
        </FormBuilderContainerSC>
        {renderForm()}
      </PageWrapperSC>
    </div>
  );
};

export default FormPage;
