import { useState, useContext } from "react";
import useInterval from '@use-it/interval';
import { EDirection, ECanvas } from "../settings/constants";
import { CanvasContext } from "../App";

interface IPosition {
    x: number,
    y: number,
}

export const computeMovement = (canvas: ECanvas[][], nextPosition: IPosition) => {
    const nextValue = canvas[nextPosition.y][nextPosition.x];

    const validCanvas = [ECanvas.Floor, ECanvas.MiniDemon, ECanvas.Demon, ECanvas.Hero]
    return {
        isValid: validCanvas.indexOf(nextValue) > -1,
        kill: nextValue === ECanvas.Hero,
    }
}

interface IProps {
    x: number,
    y: number
}

const useEnemyMovement = (initialPosition: IProps)  => {

    const positionX = initialPosition.x;
    const positionY = initialPosition.y;
    const [direction, setDirection] = useState(1);
    const { canvas, setCanvas } = useContext(CanvasContext);

    useInterval(() => {
        let newX = positionX;
        let newY = positionY;

        const random = Math.floor(Math.random() * 4);
        const directions = Object.values(EDirection);
        const randomDirection = directions[random];

        if (randomDirection === EDirection.Left) {
            newX = positionX - 1
            setDirection(-1);
        }   
        else if (randomDirection === EDirection.Right) {
            newX = positionX + 1
            setDirection(1);
        }
        else if (randomDirection === EDirection.Up) {
            newY = positionY - 1
        }
        else if (randomDirection === EDirection.Down) {
            newY = positionY + 1
        }

        const movement = computeMovement(canvas, {x:newX, y:newY});
        if (movement.isValid) {

            const newCanvas = canvas;
            const who = newCanvas[positionY][positionX];
            newCanvas[positionY][positionX] = newCanvas[newY][newX];
            newCanvas[newY][newX] = who;

            console.log('who', who);
            
            setCanvas(newCanvas);

            //setPositionX(newX);
            //setPositionY(newY);
        }
    }, 2000);

    return { positionX, positionY, direction };
}

export default useEnemyMovement;