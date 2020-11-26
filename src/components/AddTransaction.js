import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');

  const { addPlayer } = useContext(GlobalContext);
  const { populateTeam1 } = useContext(GlobalContext);
  const { players } = useContext(GlobalContext);

  const onSubmit = e => {

    e.preventDefault();

    if(text.trim() !== '' && players.length < 10){
      const newPlayer = {
        id: Math.floor(Math.random() * 100000),
        text
      }
      addPlayer(newPlayer);
      setText('')
    }

  }

  return (
    <>
      <form className="add-player" onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter player name..." />
        </div>
        <button className="btn">Add player</button>
      </form>
    </>
  )
}
