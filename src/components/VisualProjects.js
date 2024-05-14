import BrowserImage from './BrowserProjects/browser-image';
import BrowserDesc from './BrowserProjects/browser-desc';

const projects = [
    {
    name: "ABC1",
    image: 'ABC IMAGE',
    description:
    "A fullstack Facebook clone created from a legacy starter codebase. Recreates Facebook’s main functionalities including: Newsfeed, Likes, Comments, image uploads,User Profiles, Real-time Search, and Friends.",
    techUsed: ["Mongo", "Express", "React", "NodeJS"],
    github:"https://github.com"
    },
    {
    name: "Acebook",
    image: "AcebookImage",
    description:
        "A fullstack Facebook clone created from a legacy starter codebase. Recreates Facebook’s main functionalities including: Newsfeed, Likes, Comments, image uploads,User Profiles, Real-time Search, and Friends.",
    techUsed: ["Mongo", "Express", "React", "NodeJS"],
    github: "https://github.com/clairep94/acebook-team-griffins",
    website: "https://github.com/clairep94/acebook-team-griffins",
    },];

const VisualProjects = () => {

return (
<div className="container">
    <span className="Section-Header">Projects</span>
    <p className='Section-Text'>Here are just a selection of my projects. You can find more projects, as well as those currently in development, on my <a className='LightBlueLink' href='https://github.com/Fordcois'>GitHub...</a></p>

        
    {projects.map((project, index) => (
        <div key={index}>
            {index % 2 === 0 ? (
            // Left Alignment
            <div className='Browser-Project-ContainerLeft'>
                <BrowserImage Align='Right' projectName={project.name} image='IMAGE'/>
                <BrowserDesc Align='Left' projectName={project.name} projectDescription={project.description} projectTechUsed={project.techUsed} github={project.github} website={project.website} />
            </div>
            ) : (
                // Right Alignment
            <div className='Browser-Project-ContainerRight'>
                <BrowserDesc Align='Right' projectName={project.name} projectDescription={project.description} projectTechUsed={project.techUsed} github={project.github} website={project.website}  />
                <BrowserImage Align='Left' projectName={project.name} image='IMAGES'/>
            </div>
            )}
        </div>
    ))}
</div>
)}

export default VisualProjects;