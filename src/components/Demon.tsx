import React from 'react';
import { TILE_SIZE, DEMON_TIME_SIZE } from '../settings/constants';
import useEnemyMovement from '../hooks/useEnemyMovement';

interface IProps
{
    x: number,
    y: number
}

const Demon:React.FC<IProps> = (props) => {

    const { positionX, positionY, direction } = useEnemyMovement({x: props.x, y:props.y});
    
    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/DEMON.png)",
            backgroundRepeat: 'no-repeat',
            width:DEMON_TIME_SIZE,
            height:DEMON_TIME_SIZE,
            top:TILE_SIZE * positionY,
            left:TILE_SIZE * positionX,
            transform:`scaleX(${direction})`,
            animation: 'demon-animation 0.8s steps(4) infinite',
        }} />
    )
}

export default Demon;