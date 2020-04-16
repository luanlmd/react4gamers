import React from 'react';
import Hero from '../Hero';
import { GAME_SIZE } from '../settings/constants';

const Board = () => {
    return(
        <>
        <Hero></Hero>
        <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
        </>
    )
}

export default Board;