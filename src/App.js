import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './config/routes';

import './App.css';

function App() {
  const history = useHistory();
  const [token, setToken] = useState(null);
  

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    history.push('/login');
  }

  return (
    <div>
      <NavBar />
      <div>
        <Routes setToken={setToken} token={token} handleLogout={handleLogout} />
      </div>
    </div>
  );
}

export default App;
