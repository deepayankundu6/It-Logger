import './App.css';
import Searchbar from '../src/components/layouts/searchbar';
import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import Logs from './components/logs/Logs';

const App = () => {

  useEffect(() => {
    // Initialises materialise javascript
    M.AutoInit();
  });
  return (
    <div className="App">
      <Searchbar />
      <Logs />
    </div>
  );
}

export default App;
