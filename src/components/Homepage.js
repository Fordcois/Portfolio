import React from 'react';
import BackgroundImage from '@/assets/Port_Web_BackGround.png'
import Glitch from './Glitch';
const Bio = "Hey! I'm Sam, a London-based software developer with a knack for problem-solving and a passion for sleek design. Explore my portfolio below, and feel free to drop me a line if you've got something cool in mind or just want to geek out about tech!"
import Socials from './Socials';
import { FaArrowDown } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

const HomePage = () => {
return (
<div className='Homepage-Background' style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
    <div className='Homepage-Content'>
        <Glitch Name={'SAMUEL FORD'}/>
        <div className='Glitch-SubHeading'>Software Developer</div>
        <Socials/>
        {/* <p className='Biotext'>{Bio}</p> */}
    </div> 
    <div style={{ position: 'absolute', bottom: '1%', right: '1%', padding: '10px' }}>
        <FaAnglesDown className="ArrowIcon" style={{color:'rgba(240,255,255,.2)'}}/>
        <FaAnglesDown className="ArrowIcon" style={{color:'rgba(240,255,255,.8)'}}/>


    </div>
</div>
);
};
    
    export default HomePage;