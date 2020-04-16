import React from 'react';
import './index.css';
import { TILE_SIZE } from '../settings/constants';

const Hero = () => {
    return (
        <div style={{
            position:'absolute',
            backgroundImage: "url(./assets/HERO.png)",
            backgroundRepeat: 'no-repeat',
            width:TILE_SIZE,
            bottom:TILE_SIZE*3,
            left:TILE_SIZE*5,
            height:96,
            animation: 'hero-animation 0.8s steps(4) infinite'
        }} />
    )
}

export default Hero;