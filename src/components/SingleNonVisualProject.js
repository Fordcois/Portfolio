import { FaGithub, FaGlobe } from "react-icons/fa";
import TechStackDisplay from "./BrowserProjects/tech-stack";

const SingleNonVisualProject = ({name,description,tech,github,website}) => {
return(
    <div className='SingleNonVisualProject'>
        <div>
            <span className="TitlePinkGradient" style={{fontSize: '2rem'}}>{name.toUpperCase()}</span><br/>
            <div className="TitlePinkGradient-Underline"></div>
            <p className="NoGraphic-Project-Description">{description}</p>
        </div>

        <TechStackDisplay TechStack={tech} Github={github} Website={website} Align={'Left'}/>
        

    </div>
)
}

export default SingleNonVisualProject;