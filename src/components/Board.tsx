import React, { useContext } from 'react';
import Hero from './Hero';
import { GAME_SIZE, ECanvas } from '../settings/constants';
import MiniDemon from './MiniDemon';
import Demon from './Demon';
import Chest from './Chest';
import Trap from './Trap';
import { CanvasContext } from '../App';

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


const Board:React.FC = () => {
    const { canvas } = useContext(CanvasContext);
    const tiles = getCanvas(canvas);

    return(
        <>
            {tiles.map((tile) => {
                if (tile.text === ECanvas.Hero)
                    return <Hero key={tile.key} x={tile.x} y={tile.y}></Hero>
                else if (tile.text === ECanvas.Demon)
                    return <Demon key={tile.key} x={tile.x} y={tile.y}></Demon>
                else if (tile.text === ECanvas.Chest)
                    return <Chest key={tile.key} x={tile.x} y={tile.y}></Chest>
                else if (tile.text === ECanvas.Trap)
                    return <Trap key={tile.key} x={tile.x} y={tile.y}></Trap>
                else if (tile.text ===  ECanvas.MiniDemon)
                    return <MiniDemon key={tile.key} x={tile.x} y={tile.y}></MiniDemon>
                return null;
            })}
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
        </>
    )
}

export default Board;