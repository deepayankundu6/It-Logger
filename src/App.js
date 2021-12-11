import './App.css';
import Searchbar from '../src/components/layouts/searchbar';
import React, { useEffect, useState, useRef } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import TabsMenu from './components/layouts/TabsMenu';
import AddBtn from './components/layouts/AddBtn';
import AddLogs from './components/logs/AddLogs';
import axios from 'axios';
import AddTechs from './components/Techs/AddTech';

const App = () => {

  const [TechsName, setTechName] = useState([]);

  const getTechsAfterUpdate = useRef(null);

  const getTechsData = async () => {
    let resp = await axios.get(`/techs`);
    let techs = [];
    resp.data.map(tech => {
      techs.push(tech.firstName + " " + tech.lastName);
    })
    setTechName(techs);
  }
  const refreshData = () => {
    getTechsAfterUpdate.current.callgetTechs();
  }

  useEffect(() => {
    // Initialises materialise javascript
    M.AutoInit();
    getTechsData();
  }, []);

  return (
    <div className="App">
      <Searchbar />
      <TabsMenu ref={getTechsAfterUpdate} />
      <AddBtn />
      <AddLogs techs={TechsName} />
      <AddTechs refresh={refreshData} />
    </div>
  );
}

export default App;
