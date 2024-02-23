import React from 'react';
import Image from 'next/image';
import YoutubeImage from '@/assets/demo_screen.png';
import { FaCircleMinus, FaCirclePlus, FaCircleXmark} from "react-icons/fa6";
const Screen = (props) => {
    const imagePath = props.image;
    const projectTitle = props.title;

return (     

<div className='Screen'>
    <div style={{ backgroundColor: '#ef9380', borderRadius: '10px 10px 0% 0%', display: 'flex', justifyContent: 'space-between',alignItems:'center',width:'100%'}}>
        <span style={{ color: 'azure', marginLeft:'10px'}}> {projectTitle}</span>
        <div style={{paddingRight: '1%', display: 'flex', justifyContent: 'space-between',verticalAlign: 'text-bottom'}}>
            <FaCircleMinus className='BrowserButton' />
            <FaCirclePlus className='BrowserButton' />
            <FaCircleXmark className='BrowserButton' />
        </div>
    </div>
    <div style={{ width: '100%' }}> 
    <Image src={YoutubeImage} alt="Image" width={500} height={300} layout="responsive" style={{ border: '2px solid #ef9380' }} className="ScreenImage" title='Screenshot'/>
    </div>
</div>
);
};

export default Screen;