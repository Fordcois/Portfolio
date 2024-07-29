import BrowserImage from './BrowserProjects/browser-image';
import BrowserDesc from './BrowserProjects/browser-desc';

import BoozersWeepersImage from '@/assets/screenshots/BoozersWeepersScreen.png'
import AceBookImage from '@/assets/screenshots/AceBookScreen.png'
import FordReactLibImage from '@/assets/screenshots/FordReactLibScreen.png'

const projects = [
    {
    name: "Boozers Weepers",
    image: BoozersWeepersImage,
    description:
    "BoozersWeepers is a lifestyle web app designed to facilitate the tracking and settlement of informal pub bets and IOUs among friends. Users can search for friends in real-time, and initiate or respond to wager challenges with clear win conditions and deadlines. Notifications remind users when deadlines approach, and victors receive IOUs for pints, which are managed in a virtual Wallet. The platform also features a global leaderboard highlighting top performers and allows the creation of friend groups to monitor each other's betting activities.",
    techUsed: ["MongoDB", "Atlas","Express", "React", "NodeJS",'CSS','Bcrypt','Render'],
    github:"https://github.com/Fordcois/BoozersWeepers",
    website:"https://www.boozersweepers.frdmedia.co.uk/?refer=my%20portfolio"
    },
    {
    name: "Acebook",
    image: AceBookImage,
    description:
        "Acebook is a full-stack web application that replicates the core functionalities of Facebook. It offers a comprehensive social media experience with features such as a Newsfeed for viewing trending posts, the ability to like and comment on posts, and options for image uploads. Users can create and manage profiles, search for friends in real-time, and establish friend connections. ",
    techUsed: ["Mongo","Atlas", "Express", "React", "NodeJS","CSS",'Bcrypt','Render'],
    github: "https://github.com/Fordcois/Acebook",
    website:"https://acebook-frontend-72bo.onrender.com"
    },
    {
    name: "Ford React",
    image: FordReactLibImage,
    description:
        "A hosted website designed for displaying and organizing previously built React components, making them easy to use and integrate into future projects. The site’s architecture is built around the philosophy of being straightforward to extend and update.",
    techUsed: ["Javascript","React","CSS"],
    github: "https://github.com/Fordcois/ford-react-library",
    website:"https://www.library.frdmedia.co.uk/"
    },

];

const VisualProjects = () => {

return (
<div className="container">
    <div className="Section-Header">Projects</div>
    <p className='Section-Text'>Here are just a selection of my projects. You can find more projects, as well as those currently in development, on my <a className='LightBlueLink' href='https://github.com/Fordcois'>GitHub...</a></p>

        
    {projects.map((project, index) => (
        <div key={index}>
            {index % 2 === 0 ? (
            // Left Alignment
            <div className='Browser-Project-ContainerLeft'>
                <BrowserImage Align='Right' projectName={project.name} Projectimage={project.image}/>
                <BrowserDesc Align='Left' projectName={project.name} projectDescription={project.description} projectTechUsed={project.techUsed} github={project.github} website={project.website} />
            </div>
            ) : (
                // Right Alignment
            <div className='Browser-Project-ContainerRight'>
                <BrowserDesc Align='Right' projectName={project.name} projectDescription={project.description} projectTechUsed={project.techUsed} github={project.github} website={project.website}  />
                <BrowserImage Align='Left' projectName={project.name} Projectimage={project.image}/>
            </div>
            )}
        </div>
    ))}
</div>
)}

export default VisualProjects;