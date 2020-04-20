import React from 'react';
import { TILE_SIZE, HERO_HEAD_OFFSET } from '../settings/constants';
import useEnemyMovement from '../hooks/useEnemyMovement';

interface IProps
{
    x: number,
    y: number
}

const MiniDemon:React.FC<IProps> = (props) => {

    const { positionX, positionY, direction } = useEnemyMovement({x: props.x, y:props.y});

    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `0 -${TILE_SIZE - HERO_HEAD_OFFSET}px`,
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HEAD_OFFSET,
            top:TILE_SIZE * positionY - 15,
            left:TILE_SIZE * positionX,
            animation: 'mini-demon-animation 0.8s steps(4) infinite',
            transform:`scaleX(${direction})`
        }} />
    )
}

export default MiniDemon;