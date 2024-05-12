import React from 'react';
import { FaGithub, FaGlobe } from "react-icons/fa";

const TechStackDisplay = ({TechStack,Github,Website}) => {

return (     

  <div style={{backgroundColor:'green',textAlign:'right',width:'100%'}}>


            <div style={{marginBottom:'5px',justifyContent:'right'}}>
                {Website ? (
                <a href={Website} style={{ textDecoration: "none", color: "inherit" }} >
                    <span className="TechBubbleBlue">
                        <FaGlobe style={{ fontSize: ".65rem", marginRight: ".5%" }} />LINK
                    </span>
                </a>
                ) : null}

                {Github ? (
                <a href={Github} style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="TechBubbleBlack"> 
                        <FaGithub style={{ fontSize: ".65rem", marginRight: ".5%" }}/>
                        GITHUB
                    </span>
                </a>
                ) : null}

            </div>

            <div style={{display:'flex', marginBottom:'5px',justifyContent:'right',flexWrap:'wrap'}}>
                {TechStack.map((tech, index) => (
                <span key={index} className="TechBubble">
                    {tech.toUpperCase()}
                </span>
                ))}
            </div>
        </div>








  
      );
};

export default TechStackDisplay;