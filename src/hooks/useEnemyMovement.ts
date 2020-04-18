import { useState } from "react";
import useInterval from '@use-it/interval';
import { EDirection } from "../settings/constants";

const useEnemyMovement = ()  => {

    const [positionX, setPositionX] = useState(10);
    const [positionY, setPositionY] = useState(10);
    const [direction, setDirection] = useState(1);

    useInterval(() => {
        const random = Math.floor(Math.random() * 4);
        const directions = Object.values(EDirection);
        const randomDirection = directions[random];

        if (randomDirection === EDirection.Left) {
            setPositionX(positionX - 1)
            setDirection(-1);
        }   
        else if (randomDirection === EDirection.Right) {
            setPositionX(positionX + 1)
            setDirection(1);
        }
        else if (randomDirection === EDirection.Up) {
            setPositionY(positionY + 1)
        }
        else if (randomDirection === EDirection.Down) {
            setPositionY(positionY - 1)
        }
    }, 2000);

    return { positionX, positionY, direction };
}

export default useEnemyMovement;