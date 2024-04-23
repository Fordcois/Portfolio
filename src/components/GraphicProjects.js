import React from "react";
import Screen from "./screen";
import BoozersWeepersImage from "@/assets/screenshots/BoozersWeepers_screenshot.png";
import AcebookImage from "@/assets/screenshots/Acebook_Screenshot.png";
import { FaGithub, FaGlobe } from "react-icons/fa";

const BrowserProjects = () => {
const projects = [
    // {name: 'EXAMPLE',
    // image: TwitterImage,
    // description: 'PROJECT DESCRIPTION',
    // techUsed: ['TECH', 'AS', 'STRING', 'ARRAY'],
    // github:'http://www.github.com' - Remove if no Link,
    // website: 'http://twitter.com' - Remove if no ink,
    // },
    {
    name: "Boozers Weepers",
    image: BoozersWeepersImage,
    description:
        "BoozersWeepers is a full stack application based around creating and tracking bets between friends. Users are able to register accounts, log bets with other users, claim wins from a wallet & Compare stats between groups.",
    techUsed: ["Mongo", "Express", "React", "NodeJS"],
    github: "https://github.com/Fordcois/BoozersWeepers",
    },
    {
    name: "Acebook",
    image: AcebookImage,
    description:
        "A fullstack Facebook clone created from a legacy starter codebase. Recreates Facebook’s main functionalities including: Newsfeed, Likes, Comments, image uploads,User Profiles, Real-time Search, and Friends.",
    techUsed: ["Mongo", "Express", "React", "NodeJS"],
    github: "https://github.com/clairep94/acebook-team-griffins",
    website: "https://github.com/clairep94/acebook-team-griffins",
    },];

return (

<div className="ProjectDiv-Container">

<span className="SectionHeaderBox-Pink">PROJECTS...</span>

    {projects.map((project) => (
        <div key={project.name} className="Single-Graphic-Project">
        <div className="Project-Screen-Container">
            <Screen title={project.name} image={project.image} />
        </div>

        <div className="Project-Text-Container">
            <span className="TitlePinkGradient">{project.name.toUpperCase()}</span><br/>
            <div className="TitlePinkGradient-Underline"></div>

            <p className="Project-Description">{project.description}</p>
            <div style={{ textAlign: "right", paddingRight: "15%" }}>
                
                {project.website ? (
                <a href={project.website} style={{ textDecoration: "none", color: "inherit" }} >
                <span className="TechBubbleBlue">
                    <FaGlobe style={{ fontSize: ".65rem", marginRight: ".5%" }} />LINK
                </span>
                </a>
                ) : null}

                {project.github ? (
                <a href={project.github} style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="TechBubbleBlue"> <FaGithub style={{ fontSize: ".65rem", marginRight: ".5%" }}/>
                        GITHUB
                    </span>
                </a>
                ) : null}
            </div>
            <div>
                {project.techUsed.map((tech, index) => (
                <span key={index} className="TechBubble">
                    {tech.toUpperCase()}
                </span>
                ))}
            </div>
            </div>
        </div>
    ))}
</div>
);
};

export default BrowserProjects;
