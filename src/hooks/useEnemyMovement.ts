import { useState } from "react";
import useInterval from '@use-it/interval';
import { EDirection, canvas, ECanvas } from "../settings/constants";

interface IPosition {
    x: number,
    y: number,
}

export const computeMovement = (nextPosition: IPosition) => {
    const nextValue = canvas[nextPosition.y][nextPosition.x];

    const validCanvas = [ECanvas.Floor, ECanvas.Chest, ECanvas.Trap, ECanvas.MiniDemon, ECanvas.Demon, ECanvas.Hero]
    return {
        isValid: validCanvas.indexOf(nextValue) > -1,
        kill: nextValue === ECanvas.Hero,
    }
}

interface IProps {
    x: number,
    y: number
}

const useEnemyMovement = (initialPosition?: IProps)  => {

    const [positionX, setPositionX] = useState(initialPosition?.x || 10);
    const [positionY, setPositionY] = useState(initialPosition?.y || 10);
    const [direction, setDirection] = useState(1);

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

        const movement = computeMovement({x:newX, y:newY});
        if (movement.isValid) {
            setPositionX(newX);
            setPositionY(newY);
        }
    }, 2000);

    return { positionX, positionY, direction };
}

export default useEnemyMovement;