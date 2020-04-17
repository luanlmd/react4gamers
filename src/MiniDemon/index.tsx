import React from 'react';
import './index.css';
import { TILE_SIZE, HERO_HEAD_OFFSET } from '../settings/constants';

const MiniDemon:React.FC = () => {
    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `0 -${TILE_SIZE - HERO_HEAD_OFFSET}px`,
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HEAD_OFFSET,
            bottom:TILE_SIZE*10,
            left:TILE_SIZE*10,
            animation: 'mini-demon-animation 0.8s steps(4) infinite'
        }} />
    )
}

export default MiniDemon;