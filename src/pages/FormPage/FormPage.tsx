interface IFormPageProps {
  navigate: (url: string) => void;
}

const FormPage = ({ navigate }: IFormPageProps) => {
  return (
    <div>
      <div>its a FormPage</div>
      <button onClick={() => navigate('/')}>got to HomePage</button>
    </div>
  );
};

export default FormPage;
