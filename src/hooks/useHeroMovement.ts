import { useState } from "react";
import useEventListener from '@use-it/event-listener';
import { EDirection, canvas, ECanvas } from "../settings/constants";

interface IPosition {
    x: number,
    y: number,
}

export const computeMovement = (nextPosition: IPosition) => {
    const nextValue = canvas[nextPosition.y][nextPosition.x];

    const validCanvas = [ECanvas.Floor, ECanvas.Chest, ECanvas.Trap, ECanvas.MiniDemon, ECanvas.Demon, ECanvas.Door]
    const dieCanvas = [ECanvas.Trap, ECanvas.MiniDemon, ECanvas.Demon];

    console.log(validCanvas.indexOf(nextValue));
    return {
        isValid: validCanvas.indexOf(nextValue) > -1,
        die: dieCanvas.indexOf(nextValue) > -1,
        chest: nextValue === ECanvas.Chest,
        exit: nextValue === ECanvas.Door
    }
}

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

        const movement = computeMovement({x:newX, y:newY});
        if (movement.die) {
            alert('Morreu labigó!');
        }

        if (movement.exit) {
            alert('Saiu!!! eeeee!!');
        }

        if (movement.isValid) {
            setPositionX(newX);
            setPositionY(newY);
        }
    });

    return { positionX, positionY, direction };
}
export default useHeroMovement;