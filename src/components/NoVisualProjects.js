import SingleNonVisualProject from "./SingleNonVisualProject";

const NonVisualProjects = () => {
  const projects = [
    // {name: 'EXAMPLE',
    // description: 'PROJECT DESCRIPTION',
    // techUsed: ['TECH', 'AS', 'STRING', 'ARRAY'],
    // github:'http://www.github.com' - Remove if no Link,
    // website: 'http://twitter.com' - Remove if no ink,
    // },
    {
      name: "Solvr",
      description:
        "Solvr is a tool for solving Wordle-style puzzles, built with a user interface that mimics the official game. It takes user input of letters and colors, then provides the best suggestions based on potential remaining words.In my experiments, Solvr solves the puzzle in an average of 3.5 guesses.",
      techUsed: ["Typescript","NextJS","React",'CSS'],
      github: "https://github.com/Fordcois/wordle-solver",
      website: 'https://www.solvr.frdmedia.co.uk/'
    },
    {
      name: "Crown Cryptic",
      description:
        "Crown Cryptic is a web application designed to challenge users with a daily cryptic crossword clue. Inspired by the success of word-based games like Wordle, Crown Cryptic provides a fun and engaging way to solve cryptic crossword clues every day.",
      techUsed: ["JavaScript","nextJS", "React", "CSS"],
      github: "https://github.com/Fordcois/crown-cryptic",
    },
    {
      name: "EventSphere",
      description:
        "An event planning website where the party comes to you! Users can register, submit detailed event requests including type, budget, and number of attendees, and receive responses with offers from relevant businesses that meet that criteria.",
      techUsed: ["TypeScript", "React", "PostgreSQL", "NodeJS", "HTML", "CSS"],
      github: "https://github.com/Fordcois/event-sphere",
    },
    {
      name: "Sudoku Solver",
      description:
        "🔍 A Program to deduce the answers to simple Sudoku puzzles, the program uses logic rather than brute force to deduce possible numbers for each cell by generating a list of possible numbers and cross checking this across other seen numbers.",
      techUsed: ["Python"],
      github: "https://github.com/Fordcois/sudokuSolver",
    },
    {
      name: "RPG-Framework",
      description:
        "A boilerplate of object-oriented programming code that enables users to explore landscapes, accept quests, gather items and gold, and interact with characters. The project's goal isn't to develop a full game, but rather to provide a toolkit for others to craft their own adventures.",
      techUsed: ["javascript", "react"],
      github: "https://github.com/Fordcois/RPG-React-Framework",
    },
    {
      name: "Chitter",
      description:
        "Chitter is a twitter clone fullstack application application. Users can create accounts, post 'cheeps'  as well as filter posts from other users by Author or by hashtags.",
      techUsed: ["Python", "SQL", "CSS", "Flask", "Jinja"],
      github: "https://github.com/Fordcois/Chitter_Twitter_Clone",
    },
    {
      name: "Tomato Time",
      description:
        "🍅⏱ An animated Pomodoro timer web app that boosts productivity through focused work intervals and timed breaks. Enjoy animated visuals to keep track of your time management",
      techUsed: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Fordcois/pomodoro-animated_timer",
    },
  ];

  return (
    <div className="container-wrapContent">
      {projects.map((project, index) => (
        <SingleNonVisualProject
          key={index}
          name={project.name}
          description={project.description}
          tech={project.techUsed}
          github={project.github}
          website={project.website}
        />
      ))}
    </div>
  );
};

export default NonVisualProjects;