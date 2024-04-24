import { FaGithub, FaGlobe } from "react-icons/fa";

const SingleNonVisualProject = ({name,description,tech,github,website}) => {
return(
    <div className='SingleNonVisualProject'>
        
        <span className="TitlePinkGradient" style={{fontSize: '2rem'}}>{name.toUpperCase()}</span><br/>
        <div className="TitlePinkGradient-Underline"></div>
        
        <p className="NoGraphic-Project-Description">{description}</p>
        <div className="NonVisualTechStack">
        {website ? (
                <a href={website} style={{ textDecoration: "none", color: "inherit" }} >
                <span className="TechBubbleBlue">
                    <FaGlobe style={{ fontSize: ".65rem", marginRight: ".5%" }} />LINK
                </span>
                </a>
                ) : null}

        {github ? (
                <a href={github} style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="TechBubbleBlue"> <FaGithub style={{ fontSize: ".65rem", marginRight: ".5%" }}/>
                        GITHUB
                    </span>
                </a>
                ) : null}
        <br/>
        {tech.map((tech,index) => (
                <span key={index} className="TechBubble">
                    {tech.toUpperCase()}
                </span>
                ))}

    </div>
    </div>
)
}

export default SingleNonVisualProject;