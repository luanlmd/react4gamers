import React from 'react';
import Tile from './Tile';
import { canvas } from '../../settings/constants';

interface ITile {
    x: number, 
    y: number,
    text: string;
}

export const getCanvas = () => {
    const tiles = [];

    for (let y = 0; y< canvas.length; y++) {
        const canvasY = canvas[y];
        for (let x = 0; x < canvasY.length; x++) {
            const canvasYX = canvasY[x];
            const text = (canvas[y][x] || canvasYX).toString();
            const tileObj: ITile = { x, y, text }
            tiles.push(tileObj)
        }
    }

    return tiles;
}

const Debugger: React.FC = () => {

    const tiles = getCanvas();
    
    return (
        <>
        {tiles.map((tile: ITile) => (
            <Tile x={tile.x} y={tile.y} text={tile.text}></Tile>
        ))}
        </>
    );
}

export default Debugger;