import './App.css';
import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'

const App = () => {

  useEffect(() => {
    // Initialises materialise javascript
    M.AutoInit();
  });
  return (
    <div className="App">
      <h2> My App is ready for development!!!.</h2>
    </div>
  );
}

export default App;
