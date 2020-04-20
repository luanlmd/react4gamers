import { useState } from "react";
import useEventListener from '@use-it/event-listener';
import { EDirection, isMovementValid } from "../settings/constants";

interface IProps {
    x: number,
    y: number
}

const useHeroMovement = (initialPosition: IProps)  => {

    const [positionX, setPositionX] = useState(initialPosition.x);
    const [positionY, setPositionY] = useState(initialPosition.y);
    const [direction, setDirection] = useState(1);

    useEventListener('keydown', (e: any) => {
        let newX = positionX;
        let newY = positionY;

        if (e.key === EDirection.Left) {
            newX = positionX - 1
            setDirection(-1);
        }   
        else if (e.key === EDirection.Right) {
            newX = positionX + 1
            setDirection(1);
        }
        else if (e.key === EDirection.Up) {
            newY = positionY - 1
        }
        else if (e.key === EDirection.Down) {
            newY = positionY + 1
        }

        if (isMovementValid({x:newX, y:newY})) {
            setPositionX(newX);
            setPositionY(newY);
        }
    });

    return { positionX, positionY, direction };
}
export default useHeroMovement;