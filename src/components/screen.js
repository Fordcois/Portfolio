import React from "react";
import Image from "next/image";
import { FaCircleMinus, FaCirclePlus, FaCircleXmark } from "react-icons/fa6";

const Screen = (props) => {
    const image = props.image;
    const projectTitle = props.title;

return (
<div className="ParentDiv">
    <div className="ImageBrowserNavigationBar">
        <span className="ImageBrowserNavigationTitle">
            {projectTitle.toUpperCase()}
        </span>

        <div className="ImageBrowserNavigationButtons">
            <FaCircleMinus className="BrowserButton" />
            <FaCirclePlus className="BrowserButton" />
            <FaCircleXmark className="BrowserButton" />
        </div>
    </div>
    <div
            style={{
                position: 'relative',
                width: '100%', // Parent container width
                height: 'auto', // Allow height to adjust based on image aspect ratio
                maxWidth: '800px', // Maximum width of the image
                minWidth: '320px', // Minimum width of the image
                maxHeight: '450px', // Maximum height of the image
                minHeight: '180px', // Minimum height of the image
            }}
        >
            <Image
                src={image}
                alt="Project Page"
                fill
                title="Screenshot"
                style={{
                    objectFit: 'contain', // Maintain aspect ratio and fit the image within the container
                    width: '100%', // Ensure the image fills the container
                    height: '100%', // Adjust height according to aspect ratio
                }}
                className="Screen-Image"
            />
        </div>
</div>
);
};

export default Screen;
