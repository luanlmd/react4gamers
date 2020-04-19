import React from 'react';
import { TILE_SIZE, HERO_HEAD_OFFSET } from '../settings/constants';

const Trap:React.FC = () => {
    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/TRAP.png)",
            backgroundPosition: `0 -${TILE_SIZE - HERO_HEAD_OFFSET}px`,
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HEAD_OFFSET,
            top:TILE_SIZE*3,
            left:TILE_SIZE*15,
            animation: 'trap-animation 0.8s steps(8) infinite'
        }} />
    )
}

export default Trap;