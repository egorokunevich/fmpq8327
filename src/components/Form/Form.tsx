import { memo } from 'react';
import { FormSC } from './styles';

export interface IFormData {
  inputsCount: number;
  textAreasCount: number;
  checkboxesCount: number;
}

interface IFormProps {
  config: IFormData | null;
}

// Если бы было требование ресетать форму, то id можно было бы генерировать уникальный.
// В такой имплементации, при ребилде существующие инпуты сохранят свое значение,
// если новый ключ совпадает с имеющимся.
const getFormElementByKey = (key: string, id: number) => {
  switch (key) {
    case 'inputsCount':
      return <input key={`${key} ${id}`} />;
    case 'textAreasCount':
      return <textarea key={`${key} ${id}`} />;
    case 'checkboxesCount':
      return <input key={`${key} ${id}`} type="checkbox" />;
    default:
      return null as never;
  }
};

const Form = ({ config }: IFormProps) => {
  if (!config) {
    return null;
  }

  const renderFormElements = () => {
    return Object.entries(config).map(([key, count]) => {
      if (count > 0) {
        const elements = [];

        for (let i = 0; i < count; i++) {
          elements.push(getFormElementByKey(key, i));
        }

        return elements;
      }

      return null;
    });
  };

  return <FormSC>{renderFormElements()}</FormSC>;
};

export default memo(Form);
