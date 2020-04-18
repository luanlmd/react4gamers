import React from 'react';
import { TILE_SIZE } from '../settings/constants';

const Chest:React.FC = () => {
    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/CHEST.png)",
            backgroundPosition: `0 -${TILE_SIZE}px`,
            width:TILE_SIZE,
            height:TILE_SIZE,
            bottom:TILE_SIZE*15,
            left:TILE_SIZE*5,
            animation: 'chest-animation 0.8s steps(3) infinite'
        }} />
    )
}

export default Chest;