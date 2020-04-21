import React from 'react';
import './App.css';
import Board from './components/Board';
import { GAME_SIZE } from './settings/constants';
import { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import Debugger from './components/Debugger';

const App:React.FC = () => {
  const [showDebugger, setShowDebugger] = useState(false);

  useEventListener('keydown', (e: any) => {
    if (e.key === 'd') {
      setShowDebugger(!showDebugger);
    }
   });

  return (
    <div className="App">
      <div
      style={{
        position:'relative',
        width:GAME_SIZE,
        height:GAME_SIZE
      }}>
        <Board></Board>
        {showDebugger && <Debugger></Debugger>}
      </div>
    </div>
  );
}

export default App;