import React, { useContext } from 'react';
import Tile from './Tile';
import { CanvasContext } from '../../App';

interface ITile {
    x: number, 
    y: number,
    text: string;
    key: string;
}

export const getCanvas = (canvas: any) => {
    const tiles = [];

    for (let y = 0; y< canvas.length; y++) {
        const canvasY = canvas[y];
        for (let x = 0; x < canvasY.length; x++) {
            const canvasYX = canvasY[x];
            const text = (canvas[y][x] || canvasYX).toString();
            const key = `${x}-${y}`
            const tileObj: ITile = { x, y, text, key }
            tiles.push(tileObj)
        }
    }

    return tiles;
}

const Debugger: React.FC = () => {

    const { canvas } = useContext(CanvasContext);
    const tiles = getCanvas(canvas);
    
    return (
        <>
        {tiles.map((tile: ITile) => (
            <Tile key={tile.key} x={tile.x} y={tile.y} text={tile.text}></Tile>
        ))}
        </>
    );
}

export default Debugger;