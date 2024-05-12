import SingleNonVisualProject from "./SingleNonVisualProject";

const NonVisualProjects = () => {

const projects = [
    // Chitter
    // makersBNB
    // ReactRPG

    // {name: 'EXAMPLE',
    // description: 'PROJECT DESCRIPTION',
    // techUsed: ['TECH', 'AS', 'STRING', 'ARRAY'],
    // github:'http://www.github.com' - Remove if no Link,
    // website: 'http://twitter.com' - Remove if no ink,
    // },
    {
    name: "Sudoku Solver",
    description:
        "🔍 A logic-based Sudoku solver that attempts to solve user puzzles by iterating through the puzzle and removing impossible options",
    techUsed: ["Python"],
    github: "https://github.com/Fordcois/sudokuSolver",
    website:'facebook.com'
    },
    {
    name: "Chitter",
    description:
    "Chitter is a full stack web application that draws 'inspiration' from Twitter. This project creates a Twitter-like experience, allowing users to register accounts, share their own 'Cheeps' and explore content shared by others.",
    techUsed: ["Python", "SQL", "CSS", "Flask","Jinja"],
    github: "hhttps://github.com/Fordcois/Chitter_Twitter_Clone",
    },
    {name: 'RPG-Framework',
    description: 
    "React-based RPG framework offers a boilerplate of object-oriented programming code that enables users to explore landscapes, accept quests, gather items and gold, and interact with characters. The project's goal isn't to develop a full game, but rather to provide a toolkit for others to craft their own adventures.",
    techUsed: ['javascript','react'],
    github:'http://www.github.com'
    },    {name: 'RPG-Framework',
    description: 
    "React-based RPG framework offers a boilerplate of object-oriented programming code that enables users to explore landscapes, accept quests, gather items and gold, and interact with characters. The project's goal isn't to develop a full game, but rather to provide a toolkit for others to craft their own adventures.",
    techUsed: ['javascript','react'],
    github:'http://www.github.com'
    },
];

const Lorum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in felis at risus gravida dictum quis quis ex. Aliquam congue tellus eu laoreet laoreet. In laoreet magna sed orci blandit pharetra. Duis id nulla et mauris suscipit malesuada. Fusce sagittis ipsum ac massa convallis lobortis. Integer at orci ac ligula lobortis posuere non vel lacus. Vivamus volutpat tellus a est semper, ut commodo lectus bibendum. Praesent tincidunt bibendum mauris, placerat aliquam dui aliquam nec. Suspendisse non ligula in orci interdum ornare. Cras vel tempus odio. Pellentesque eget volutpat lorem, vel dapibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in bibendum lectus. '
return (
<div className="container-wrapContent" >
{projects.map((project,index) => (
    <SingleNonVisualProject key={index} name={project.name} description = {project.description} tech={project.techUsed} github={project.github} website={project.website}/>

            ))}

</div>
);
};

export default NonVisualProjects;