import React from 'react';
import NavBar from './components/NavBar';
import routes from './config/routes';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        { routes }
      </div>
    </div>
  );
}

export default App;
