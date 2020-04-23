import React, { createContext } from 'react';
import './App.css';
import Board from './components/Board';
import  { GAME_SIZE, map, ECanvas } from './settings/constants';
import { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import Debugger from './components/Debugger';

export const CanvasContext = createContext({
  canvas: map,
  setCanvas: (canvas: ECanvas[][]) => {},
});

const App:React.FC = () => {
  const [showDebugger, setShowDebugger] = useState(false);
  const [canvas, setCanvas] = useState<ECanvas[][]>(map);

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
        <CanvasContext.Provider value={{ canvas, setCanvas }}>
          <Board></Board>
          {showDebugger && <Debugger></Debugger>}
        </CanvasContext.Provider>
      </div>
    </div>
  );
}

export default App;