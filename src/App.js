import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Routes from './config/routes';

import './App.css';

function App() {
  const [token, setToken] = useState(null);
  
  return (
    <div>
      <NavBar />
      <div>
        <Routes setToken={setToken} token={token} />
      </div>
    </div>
  );
}

export default App;
