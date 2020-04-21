import { TILE_SIZE, HERO_HEAD_OFFSET } from '../settings/constants';
import useHeroMovement from '../hooks/useHeroMovement';
import React from 'react';

interface IProps
{
    x: number,
    y: number
}

const Hero:React.FC<IProps> = (props) => {

    const { positionX, positionY, direction } = useHeroMovement({x: props.x, y:props.y});

    return (
        <div style={{
            position: 'absolute',
            backgroundImage: "url(./assets/HERO.png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `0 -${TILE_SIZE - HERO_HEAD_OFFSET}px`,
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HEAD_OFFSET,
            top:TILE_SIZE * positionY - HERO_HEAD_OFFSET,
            left:TILE_SIZE * positionX,
            animation: 'hero-animation 0.8s steps(4) infinite',
            transform: `scaleX(${direction})`,
            zIndex: 1
        }} />
    )
}

export default Hero;