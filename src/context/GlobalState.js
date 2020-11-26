import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  players: [],
  team1: [],
  team2: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deletePlayer(id) {
    dispatch({
      type: 'DELETE_PLAYER',
      payload: id
    });
  }

  function addPlayer(player) {
    dispatch({
      type: 'ADD_PLAYER',
      payload: player
    });
  }

  function populateTeam1(team1){
    dispatch({
      type: 'FILL_TEAM_1',
      payload: team1
    });
  }

  function populateTeam2(team2){
    dispatch({
      type: 'FILL_TEAM_2',
      payload: team2
    });
  }

  return (<GlobalContext.Provider value={{
    players: state.players,
    team1: state.team1,
    team2: state.team2,
    deletePlayer,
    addPlayer,
    populateTeam1,
    populateTeam2
  }}>
    {children}
  </GlobalContext.Provider>);
}