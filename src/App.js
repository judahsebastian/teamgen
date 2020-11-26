import React from 'react';
import { Header } from './components/Header';
import { PlayerList } from './components/PlayerList';
import { AddTransaction } from './components/AddTransaction';
import { GenerateTeams } from './components/GenerateTeams';
import { Team1 } from './components/Team1';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Team1/>
        <GenerateTeams/>
        <AddTransaction />
        <PlayerList />
      </div>
    </GlobalProvider>
  );
}

export default App;
