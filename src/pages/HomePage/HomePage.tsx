import Button from '../../components/Button/Button';
import { PageTitleSC } from './styles';

interface IHomePageProps {
  navigate: (url: string) => void;
}

const HomePage = ({ navigate }: IHomePageProps) => {
  return (
    <div>
      <PageTitleSC>Form Generator</PageTitleSC>
      <Button onClick={() => navigate('/form')}>FORM</Button>
    </div>
  );
};

export default HomePage;
