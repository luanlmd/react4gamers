import React, { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import './index.css';
import { TILE_SIZE, HERO_HEAD_OFFSET } from '../settings/constants';

const Hero:React.FC = () => {

    const [heroPositionX, setHeroPositionX] = useState(0);
    const [heroPositionY, setHeroPositionY] = useState(0);
    const [heroDirection, setHeroDirection] = useState(1);

    useEventListener('keydown', (e: any) => {
        if (e.key === 'ArrowLeft') {
            setHeroPositionX(heroPositionX - 1)
            setHeroDirection(-1);
        }   
        else if (e.key === 'ArrowRight') {
            setHeroPositionX(heroPositionX + 1)
            setHeroDirection(1);
        }
        else if (e.key === 'ArrowUp') {
            setHeroPositionY(heroPositionY + 1)
        }
        else if (e.key === 'ArrowDown') {
            setHeroPositionY(heroPositionY - 1)
        }
    });

    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/HERO.png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `0 -${TILE_SIZE - HERO_HEAD_OFFSET}px`,
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HEAD_OFFSET,
            bottom:TILE_SIZE * heroPositionY,
            left:TILE_SIZE * heroPositionX,
            animation: 'hero-animation 0.8s steps(4) infinite',
            transform:`scaleX(${heroDirection})`
        }} />
    )
}

export default Hero;