import React, { useContext } from 'react';
import { Player } from './Player';

import { GlobalContext } from '../context/GlobalState';

export const Team1 = () => {
  const { team2 } = useContext(GlobalContext);
  return (
    <>
      <h3>Player list</h3>
      <ul className="list">
        {team2.map(player => (<Player key={player.id+1} player={player} />))}
      </ul>
    </>
  )
}
