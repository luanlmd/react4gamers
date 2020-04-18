import React from 'react';
import Hero from './Hero';
import { GAME_SIZE } from '../settings/constants';
import MiniDemon from './MiniDemon';
import Demon from './Demon';
import Chest from './Chest';
import Trap from './Trap';

const Board:React.FC = () => {
    return(
        <>
        <MiniDemon></MiniDemon>
        <Demon></Demon>
        <Chest></Chest>
        <Trap></Trap>
        <Hero></Hero>
        <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
        </>
    )
}

export default Board;