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
        <Image
            src={image}
            alt="Project Page"
            width={480}
            height={270}
            title="Screenshot"
            className="Screen-Image"
        />
</div>
);
};

export default Screen;
