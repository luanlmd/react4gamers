import React from 'react';
import { TILE_SIZE, HERO_HEAD_OFFSET } from '../settings/constants';

interface IProps
{
    x: number,
    y: number
}

const Trap:React.FC<IProps> = (props) => {

    const positionX = props.x;
    const positionY = props.y;

    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/TRAP.png)",
            backgroundPosition: `0 -${TILE_SIZE - HERO_HEAD_OFFSET}px`,
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HEAD_OFFSET,
            top:TILE_SIZE * positionY - 10,
            left:TILE_SIZE * positionX,
            animation: 'trap-animation 0.8s steps(8) infinite'
        }} />
    )
}

export default Trap;