import './App.css';
import Searchbar from '../src/components/layouts/searchbar';
import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import TabsMenu from './components/layouts/TabsMenu';
import AddBtn from './components/layouts/AddBtn';
import AddLogs from './components/logs/AddLogs';
import axios from 'axios';

const App = () => {

  const [TechsName1, setTechName1] = useState([]);

  const getTechs = async () => {
    let resp = await axios.get(`/techs`);
    setTechName1(resp.data);
  }

  useEffect(() => {
    // Initialises materialise javascript
    M.AutoInit();
    getTechs();
  }, []);

  return (
    <div className="App">
      <Searchbar />
      <TabsMenu />
      <AddBtn />
      <AddLogs techs={TechsName1} />
    </div>
  );
}

export default App;
