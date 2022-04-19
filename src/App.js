import React from 'react';
import Provider from './Providers/Provider';

import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
