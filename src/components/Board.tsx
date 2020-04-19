import React from 'react';
import Hero from './Hero';
import { GAME_SIZE } from '../settings/constants';
import MiniDemon from './MiniDemon';
import Demon from './Demon';
import Chest from './Chest';
import Trap from './Trap';
import Debugger from './Debugger';

const Board:React.FC = () => {
    return(
        <>
        <MiniDemon x={8} y={8}></MiniDemon>
        <MiniDemon x={9} y={9}></MiniDemon>
        <MiniDemon x={10} y={10}></MiniDemon>
        <MiniDemon x={11} y={11}></MiniDemon>
        <MiniDemon x={12} y={12}></MiniDemon>

        <Demon></Demon>
        <Chest></Chest>
        <Trap></Trap>
        <Hero></Hero>

        <Debugger></Debugger>
        <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
        </>
    )
}

export default Board;