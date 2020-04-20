import React from 'react';
import { TILE_SIZE } from '../settings/constants';

interface IProps
{
    x: number,
    y: number
}

const Chest:React.FC<IProps> = (props) => {

    const positionX = props.x;
    const positionY = props.y;

    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/CHEST.png)",
            backgroundPosition: `0 -${TILE_SIZE}px`,
            width:TILE_SIZE,
            height:TILE_SIZE,
            top:TILE_SIZE * positionY,
            left:TILE_SIZE * positionX,
            animation: 'chest-animation 0.8s steps(3) infinite'
        }} />
    )
}

export default Chest;