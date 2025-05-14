interface IHomePageProps {
  navigate: (url: string) => void;
}

const HomePage = ({ navigate }: IHomePageProps) => {
  return (
    <div>
      <div>its a Home page</div>
      <button onClick={() => navigate('/form')}>got to FormPage</button>
    </div>
  );
};

export default HomePage;
