import React from 'react';
import Screen from './screen';
import { FaGithub,FaGlobe } from 'react-icons/fa';

import BoozersWeepersImage from '@/assets/screenshots/BoozersWeepers_screenshot.png'
import AcebookImage from '@/assets/screenshots/Acebook_Screenshot.png'

const projects = [
  // {name: 'EXAMPLE', 
  // image: TwitterImage,
  // description: 'PROJECT DESCRIPTION',
  // techUsed: ['TECH', 'AS', 'STRING', 'ARRAY'],
  // github:'http://www.github.com' - Remove if no Link,
  // website: 'http://twitter.com' - Remove if no ink,
  // },
  {name: 'Boozers Weepers', 
  image: BoozersWeepersImage,
  description: 'BoozersWeepers is a full stack application based around creating and tracking bets between friends. Users are able to register accounts, log bets with other users, claim wins from a wallet & Compare stats between groups.',
  techUsed: ['Mongo', 'Express', 'React', 'NodeJS'],
  github:'https://github.com/Fordcois/BoozersWeepers',
  },
  {name: 'Acebook',
  image:AcebookImage,
  description: "A fullstack Facebook clone created from a legacy starter codebase. Recreates Facebook’s main functionalities including: Newsfeed, Likes, Comments, image uploads,User Profiles, Real-time Search, and Friends.",
  techUsed: ['Mongo', 'Express', 'React', 'NodeJS'] ,
  github:'https://github.com/clairep94/acebook-team-griffins',
  website:'https://github.com/clairep94/acebook-team-griffins',
  },
  // {name: 'MakersBNB', 
  // image: AcebookImage,
  // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lorem mi, pretium eget molestie et, ultricies vitae diam. Nunc vitae lectus nunc. Nullam sollicitudin, lacus non hendrerit blandit, nisl nibh laoreet tortor, a mattis dui mauris sed metus. Curabitur eu diam sit amet tortor suscipit tincidunt. Quisque non hendrerit orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac orci blandit, facilisis mi at, pulvinar orci. Aenean finibus euismod finibus. Quisque aliquet non nisl quis posuere. ',
  // techUsed: ['Typescript'],
  // },
];

const Projects = () => {
  return (
    <>
    {projects.map(project => (
      <div key={project.name} style={{ display: 'flex', width: '100vw' }}>
        
        <div style={{ flex: '40%', padding: '2% 2% 2% 2%' }}>
          <Screen title={project.name} image={project.image}/>
        </div>

          <div style={{ flex: '60%', padding: '1% 0% 2% 0%', backgroundColor:'transparent' }}>
            <div>
              <span className='TitlePinkGradient'>{project.name.toUpperCase()}</span>
              <div style={{ width: '85%', height: '4px', background: '#ef9380' }}></div>
            </div>

            <div style={{ backgroundColor: 'transparent', paddingRight: '15%', textAlign: 'justify', textJustify: 'inter-word' }}>
              <p>{project.description}</p> 
            </div>

            <div style={{textAlign:'right',paddingRight: '15%'}}>
              {project.website ?
                <a href={project.website} style={{ textDecoration: 'none', color: 'inherit' }}><span className='TechBubbleBlue'><FaGlobe style={{fontSize: '.65rem', marginRight:'.5%'}}/> LINK </span></a> 
              : null}
              {project.github ?
                <a href={project.github} style={{ textDecoration: 'none', color: 'inherit' }}><span className='TechBubbleBlue'><FaGithub style={{fontSize: '.65rem', marginRight:'.5%'}}/> GITHUB </span></a> 
              :null}
            </div>
            <div>
              {project.techUsed.map((tech, index) => (<span key={index} className='TechBubble'>{tech.toUpperCase()}</span>))}
            </div>
            
          </div>
      </div>
    ))}
  </>
  );
};

export default Projects;