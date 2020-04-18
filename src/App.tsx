import React from 'react';
import './App.css';
import Board from './components/Board';
import { GAME_SIZE } from './settings/constants';

const App:React.FC = () => {
  return (
    <div className="App">
      <div
      style={{
        position:'relative',
        width:GAME_SIZE,
        height:GAME_SIZE
      }}>
        <Board></Board>
      </div>
    </div>
  );
}

export default App;