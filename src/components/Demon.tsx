import React from 'react';
import { TILE_SIZE, DEMON_TIME_SIZE } from '../settings/constants';
import useEnemyMovement from '../hooks/useEnemyMovement';

const Demon:React.FC = () => {

    const { positionX, positionY, direction } = useEnemyMovement();
    
    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/DEMON.png)",
            backgroundRepeat: 'no-repeat',
            width:DEMON_TIME_SIZE,
            height:DEMON_TIME_SIZE,
            bottom:TILE_SIZE * positionY,
            left:TILE_SIZE * positionX,
            animation: 'demon-animation 0.8s steps(4) infinite',
            transform:`scaleX(${direction})`
        }} />
    )
}

export default Demon;