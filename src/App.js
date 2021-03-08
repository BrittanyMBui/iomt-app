import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './components/NavBar';
import InitNavBar from './components/InitNavBar';
import Routes from './config/routes';

import './App.css';

function App() {
  const history = useHistory();
  const [token, setToken] = useState(localStorage.getItem('token'));
  

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    history.push('/');
  }

  return (
    <div>
      {token ? <NavBar handleLogout={handleLogout} />: <InitNavBar setToken={setToken} />}
      <div>
        <Routes setToken={setToken} token={token} />
      </div>
    </div>
  );
}

export default App;
