import React from 'react';
import BackgroundImage from '@/assets/Port_Web_BackGround.png'
import Glitch from './Glitch';
const Bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ipsum at tellus dictum dictum. Duis quis pellentesque nisi. Fusce vel dignissim lorem, eu placerat leo. Cras convallis, lorem in facilisis finibus, orci metus consectetur justo, ut fermentum magna purus tempor sem. Curabitur aliquet commodo turpis ac euismod. '
import Socials from './Socials';
import { FaArrowDown } from "react-icons/fa";

const HomePage = () => {
return (
<div className='Homepage-Background' style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
    <div className='Homepage-Content'>
        
        <Glitch Name={'SAMUEL FORD'}/>
        {/* <div style={{backgroundColor:'#51bbcf',height:'5px'}}></div> */}
        <div className='Glitch-SubHeading'>Software Developer</div>
        
        
        <Socials/>
        <p className='Biotext'>{Bio}</p>
    </div> 

    <div style={{ position: 'absolute', bottom: '1%', right: '1%', padding: '10px' }}>
          <FaArrowDown className="ArrowIcon" />
        </div>
</div>
);
};
    
    export default HomePage;