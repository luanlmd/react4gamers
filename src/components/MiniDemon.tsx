import React from 'react';
import { TILE_SIZE, HERO_HEAD_OFFSET } from '../settings/constants';
import useEnemyMovement from '../hooks/useEnemyMovement';

const MiniDemon:React.FC = () => {
    const { positionX, positionY, direction } = useEnemyMovement();

    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `0 -${TILE_SIZE - HERO_HEAD_OFFSET}px`,
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HEAD_OFFSET,
            bottom:TILE_SIZE * positionY,
            left:TILE_SIZE * positionX,
            animation: 'mini-demon-animation 0.8s steps(4) infinite',
            transform:`scaleX(${direction})`
        }} />
    )
}

export default MiniDemon;