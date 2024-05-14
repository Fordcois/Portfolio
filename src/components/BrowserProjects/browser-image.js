import React from 'react';
import Image from 'next/image';
import CastleImage from '@/assets/screenshots/CastlePlaceHolder.png';
import { FaCircleMinus, FaCirclePlus, FaCircleXmark } from "react-icons/fa6";

const BrowserImage = ({ Align, projectName, image }) => {

    const justifyContent = Align === 'Left' ? 'flex-start' : 'flex-end';

    return (
        <div className='BrowserImage-Container'>
            <div className='BrowserImageBorder'>
                <div className='BrowserImageNavigationbar'>
                    <span className='BrowserImageTitle'>{projectName}</span>
                
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
                    style={{ width: '100%', height: 'auto', minWidth: '320px', minHeight: '180px', maxHeight: '360px', maxWidth: '640px', borderRadius:'0px 0px 15px 15px' }}
                />
            </div>
        </div>
    );
};

export default BrowserImage;