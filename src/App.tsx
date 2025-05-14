import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (pathname: string) => {
    setCurrentPath(pathname);
    window.history.pushState({}, '', pathname);
  };

  const getRoute = (path: string) => {
    if (path === '/') {
      return <HomePage navigate={navigate} />;
    }
    if (path === '/form') {
      return <FormPage navigate={navigate} />;
    }
  };

  return (
    <div className="App">
      <div>x</div>
      {getRoute(currentPath)}
    </div>
  );
}

export default App;
