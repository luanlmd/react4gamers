import React from 'react';
import './index.css';
import { TILE_SIZE, DEMON_TIME_SIZE } from '../settings/constants';

const Demon:React.FC = () => {
    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/DEMON.png)",
            backgroundRepeat: 'no-repeat',
            width:DEMON_TIME_SIZE,
            height:DEMON_TIME_SIZE,
            bottom:TILE_SIZE*5,
            left:TILE_SIZE*10,
            animation: 'demon-animation 0.8s steps(4) infinite'
        }} />
    )
}

export default Demon;