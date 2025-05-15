import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import FormPage from './pages/FormPage/FormPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (pathname: string) => {
    setCurrentPath(pathname);
    window.history.pushState({}, '', pathname);
  };

  // Не уточнил, можно ли использовать библиотеки для роутинга, поэтому написал такой.
  const getRoute = (path: string) => {
    switch (path) {
      case '/form':
        return <FormPage navigate={navigate} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return <div className="App">{getRoute(currentPath)}</div>;
}

export default App;
