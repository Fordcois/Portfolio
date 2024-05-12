import '@/app/style.css'
import Image from "next/image";

import BrowserImage from './BrowserProjects/browser-image';
import BrowserDesc from './BrowserProjects/browser-desc';

const projects = [
    {
    name: "ABC1",
    image: 'ABC IMAGE',
    description:
        "ABC, ITS EASY AS 123",
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

const ResponsiveImage = () => {

return (
<div className="container">
    
{projects.map((project, index) => (
    <div key={index}>
        {index % 2 === 0 ? (
            // Left Alignment
            <div className='Browser-Project-Container'>
                <BrowserImage Align='Right' projectName={project.name} image='IMAGE'/>
                <BrowserDesc Align='Left' projectName={project.name} projectDescription={project.description} projectTechUsed={project.techUsed} github={project.github} website={project.website} />
            </div>
        ) : (
            // Right Alignment
            <div className='Browser-Project-Container'>
                <BrowserDesc Align='Right' projectName={project.name} projectDescription={project.description} projectTechUsed={project.techUsed} github={project.github} website={project.website}  />
                <BrowserImage Align='Left' projectName={project.name} image='IMAGES'/>
            </div>
        )}
    </div>
))}



    <div style={{display:'flex'}}>

    </div>
    {/* <div style={{ backgroundColor: 'green', width: '100%', height: 'auto', position: 'relative' }}>
        Here is my Contents
        <Image 
            src={OwlImage}
            alt='Test'
            layout='responsive' // This makes the image responsive to the width of the parent container
            width={400} // Original width of the image
            height={260} // Original height of the image
            objectFit='contain' // This will maintain the aspect ratio and fit the image within the parent container
            style={{ width: '100%', height: 'auto', minWidth: '40px', minHeight: '26px' }} // Ensures the image takes up the full width and adjusts height accordingly
        />

    </div> */}

    
</div>
)}

export default ResponsiveImage;