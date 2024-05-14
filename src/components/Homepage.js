import React from 'react';
import BackgroundImage from '@/assets/Port_Web_BackGround.png'
import Glitch from './Glitch';
import Socials from './Socials';
import { FaAnglesDown } from "react-icons/fa6";

const HomePage = () => {
return (
<div className='Homepage-Background' style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
    <div className='Homepage-Content'>
        <Glitch Name={'SAMUEL FORD'}/>
        <div className='Glitch-SubHeading'>Software Developer</div>
        <Socials/>
        <div className='ContactButton-Div'>
            <div className='ContactButton'>get in touch</div>
        </div>
    </div> 
    <div style={{ position: 'absolute', bottom: '1%', right: '1%', padding: '10px' }}>
        <FaAnglesDown className="ArrowIcon" style={{color:'rgba(240,255,255,.2)'}}/>
        <FaAnglesDown className="ArrowIcon" style={{color:'rgba(240,255,255,.8)'}}/>


    </div>
</div>
);
};
    
    export default HomePage;