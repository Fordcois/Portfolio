import React from 'react';
import Image from 'next/image';
import CastleImage from '@/assets/screenshots/CastlePlaceHolder.png';
import { FaCircleMinus, FaCirclePlus, FaCircleXmark } from "react-icons/fa6";

const BrowserImage = ({ Align, projectName, image }) => {
    
    const justifyContent = Align === 'Left' ? 'flex-start' : 'flex-end';

    return (
        // TODO Justify Content Needs to be pushed to a Media Query!
        <div style={{ backgroundColor: 'black', width: '60%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 'auto', height: 'auto', display: 'flex', flexDirection: 'column',border:'2px solid red' }}>
                <div style={{ backgroundColor: 'red', width: '100%', display:'flex', justifyContent:'space-between' }}>
                    <span>{projectName}</span>
                
                    <div className="ImageBrowserNavigationButtons">
                        <FaCircleMinus className="BrowserButton" />
                        <FaCirclePlus className="BrowserButton" />
                        <FaCircleXmark className="BrowserButton" />
                    </div>
                
                </div>
                <Image
                    src={CastleImage}
                    alt='Test'
                    layout='responsive'
                    width={1280}
                    height={720}
                    objectFit='contain'
                    style={{ width: '100%', height: 'auto', minWidth: '320px', minHeight: '180px', maxHeight: '360px', maxWidth: '640px' }}
                />
            </div>
        </div>
    );
};

export default BrowserImage;