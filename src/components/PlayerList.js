import React, { useContext } from 'react';
import { Player } from './Player';

import { GlobalContext } from '../context/GlobalState';

export const PlayerList = () => {
  const { players } = useContext(GlobalContext);
  return (
    <>
      <h3>Player list</h3>
      <ul className="list">
        {players.map(player => (<Player key={player.id} player={player} />))}
      </ul>
    </>
  )
}
