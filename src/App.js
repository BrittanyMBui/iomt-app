import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './config/routes';

import './App.css';
import { EditorPropTypes } from '@tinymce/tinymce-react/lib/cjs/main/ts/components/EditorPropTypes';

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
      <NavBar handleLogout={handleLogout}/>
      <div>
        <Routes setToken={setToken} token={token} />
      </div>
    </div>
  );
}

export default App;
