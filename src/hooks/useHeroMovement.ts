import { useState } from "react";
import useEventListener from '@use-it/event-listener';
import { EDirection } from "../settings/constants";

interface IProps {
    x: number,
    y: number
}

const useHeroMovement = (initialPosition: IProps)  => {

    const [heroPositionX, setHeroPositionX] = useState(initialPosition.x);
    const [heroPositionY, setHeroPositionY] = useState(initialPosition.y);
    const [heroDirection, setHeroDirection] = useState(1);

    useEventListener('keydown', (e: any) => {
        if (e.key === EDirection.Left) {
            setHeroPositionX(heroPositionX - 1)
            setHeroDirection(-1);
        }   
        else if (e.key === EDirection.Right) {
            setHeroPositionX(heroPositionX + 1)
            setHeroDirection(1);
        }
        else if (e.key === EDirection.Up) {
            setHeroPositionY(heroPositionY - 1)
        }
        else if (e.key === EDirection.Down) {
            setHeroPositionY(heroPositionY + 1)
        }
    });

    return { heroPositionX, heroPositionY, heroDirection };
}

export default useHeroMovement;