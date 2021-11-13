import './App.css';
import Searchbar from '../src/components/layouts/searchbar';
import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import TabsMenu from './components/layouts/TabsMenu';

const App = () => {

  useEffect(() => {
    // Initialises materialise javascript
    M.AutoInit();
  });
  return (
    <div className="App">
      <Searchbar />
      <TabsMenu />
    </div>
  );
}

export default App;
