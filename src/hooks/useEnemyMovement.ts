import { useState } from "react";
import useInterval from '@use-it/interval';
import { EDirection, isMovementValid } from "../settings/constants";

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

        if (isMovementValid({x:newX, y:newY})) {
            setPositionX(newX);
            setPositionY(newY);
        }
    }, 2000);

    return { positionX, positionY, direction };
}

export default useEnemyMovement;