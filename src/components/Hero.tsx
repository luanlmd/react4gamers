import { TILE_SIZE, HERO_HEAD_OFFSET } from '../settings/constants';
import useHeroMovement from '../hooks/useHeroMovement';
import React from 'react';

const Hero:React.FC = () => {

    const { heroPositionX, heroPositionY, heroDirection } = useHeroMovement();

    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/HERO.png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `0 -${TILE_SIZE - HERO_HEAD_OFFSET}px`,
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HEAD_OFFSET,
            top:TILE_SIZE * heroPositionY,
            left:TILE_SIZE * heroPositionX,
            animation: 'hero-animation 0.8s steps(4) infinite',
            transform:`scaleX(${heroDirection})`
        }} />
    )
}

export default Hero;