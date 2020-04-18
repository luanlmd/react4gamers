import { useState } from "react";
import useEventListener from '@use-it/event-listener';
import { EDirection } from "../settings/constants";

const useHeroMovement = ()  => {

    const [heroPositionX, setHeroPositionX] = useState(0);
    const [heroPositionY, setHeroPositionY] = useState(0);
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
            setHeroPositionY(heroPositionY + 1)
        }
        else if (e.key === EDirection.Down) {
            setHeroPositionY(heroPositionY - 1)
        }
    });

    return { heroPositionX, heroPositionY, heroDirection };
}

export default useHeroMovement;