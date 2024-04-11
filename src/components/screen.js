import React from 'react';
import Image from 'next/image';
import { FaCircleMinus, FaCirclePlus, FaCircleXmark} from "react-icons/fa6";

const Screen = (props) => {

const image = props.image;
const projectTitle = props.title;

return (     

<div className='ParentDiv'>
        <div className='ImageBrowserNavigationBar'>
            <span className='ImageBrowserNavigationTitle'> {projectTitle.toUpperCase()}</span>

            <div className='ImageBrowserNavigationButtons'>
                <FaCircleMinus  className='BrowserButton' />
                <FaCirclePlus   className='BrowserButton' />
                <FaCircleXmark  className='BrowserButton' />
            </div>
        </div>
        <div >
            <Image src={image} alt="Project Page" width={640} height={360} title='Screenshot' className='ImageDiv'/>
        </div>
</div>
);
};

export default Screen;