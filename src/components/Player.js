import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Player = ({ player }) => {
  const { deletePlayer } = useContext(GlobalContext);
  return (
    <li className='plus'>
      {player.text}<button onClick={() => deletePlayer(player.id)} className="delete-btn">x</button>
    </li>
  )
}
