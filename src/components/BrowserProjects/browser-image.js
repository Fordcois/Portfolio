import React from 'react';
import Image from 'next/image';
import { FaCircleMinus, FaCirclePlus, FaCircleXmark } from "react-icons/fa6";

const BrowserImage = ({ Align, projectName, Projectimage }) => {

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
                    src={Projectimage}
                    alt='Test'
                    width={1280}
                    height={720}
                    className='BrowserImage'
                />
            </div>
        </div>
    );
};

export default BrowserImage;