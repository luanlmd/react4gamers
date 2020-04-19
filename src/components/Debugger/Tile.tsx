import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

interface IProps
{
    x: number, 
    y: number,
    text: string
}

const Tile:React.FC<IProps> = (props) => {
    const tileColor = () => {
        if (props.text === '0') {
            return 'yellow';
        }
        else if (props.text === '1') {
            return 'red';
        }
    }

    return(<div style={{
        position: 'absolute',
        width: TILE_SIZE,
        height: TILE_SIZE,
        border: '1px solid red',
        color: tileColor(),
        left: TILE_SIZE*props.x,
        top: TILE_SIZE*props.y
    }}>{props.text}</div>)
}

export default Tile;