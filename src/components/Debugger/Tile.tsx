import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import { ECanvas } from '../../settings/constants'

interface IProps
{
    x: number, 
    y: number,
    text: string
}

const Tile:React.FC<IProps> = (props) => {
    const tileColor = () => {
        if (props.text === ECanvas.Floor) {
            return 'darkgrey';
        }
        else if (props.text === ECanvas.Wall) {
            return 'yellow';
        }
        else if (props.text === ECanvas.Hero) {
            return 'magenta';
        }
        else if (props.text === ECanvas.Trap) {
            return 'green';
        }
        else if (props.text === ECanvas.Demon) {
            return 'red';
        }
        else if (props.text === ECanvas.MiniDemon) {
            return 'purple';
        }
    }

    return(<div style={{
        position: 'absolute',
        width: TILE_SIZE,
        height: TILE_SIZE,
        border: `1px solid ${tileColor()}`,
        fontSize: '30px',
        color: tileColor(),
        left: TILE_SIZE*props.x,
        top: TILE_SIZE*props.y,
        zIndex:1
    }}>{props.text}</div>)
}

export default Tile;