import React from 'react';
import Screen from './screen';
import { FaGithub,FaGlobe } from 'react-icons/fa';

import YoutubeImage from '@/assets/demo_screen.png'
import TwitterImage from '@/assets/twitter_screen.png'
import FacebookImage from '@/assets/facebook_screen.png'
import PortfolioImage from '@/assets/portfolio_site.png'

const projects = [
  {name: 'Twitter', 
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lorem mi, pretium eget molestie et, ultricies vitae diam. Nunc vitae lectus nunc. Nullam sollicitudin, lacus non hendrerit blandit, nisl nibh laoreet tortor, a mattis dui mauris sed metus. Curabitur eu diam sit amet tortor suscipit tincidunt. Quisque non hendrerit orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac orci blandit, facilisis mi at, pulvinar orci. Aenean finibus euismod finibus. Quisque aliquet non nisl quis posuere. ',
  techUsed: ['Mongo', 'Express', 'React', 'NodeJS'],
  github:'http://www.github.com',
  website: 'http://twitter.com',
  image: TwitterImage,
  },
  {name: 'Youtube', 
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet lectus nulla, non facilisis odio ultrices sit amet. Nullam in bibendum odio, eu eleifend lectus. In nibh purus, consectetur vel convallis pellentesque, tincidunt vitae ligula. Phasellus quis sapien et velit pretium porta nec non ante. Morbi sed lacus ligula. Sed sed nulla sed odio ornare maximus et sit amet urna. Duis tincidunt mi vitae dolor vulputate, nec rutrum neque mollis. Praesent sit amet eleifend leo. Sed condimentum eget neque nec iaculis. Donec a erat id nisi vestibulum pellentesque vel eget augue. Aliquam pellentesque egestas massa eget rhoncus. Nunc vitae efficitur ligula. ',
  techUsed: ['Python', 'Flask', 'Postgres',] ,
  github:'http://www.Youtube.com',
  image:YoutubeImage
  },
  {name: 'Facebook', 
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lorem mi, pretium eget molestie et, ultricies vitae diam. Nunc vitae lectus nunc. Nullam sollicitudin, lacus non hendrerit blandit, nisl nibh laoreet tortor, a mattis dui mauris sed metus. Curabitur eu diam sit amet tortor suscipit tincidunt. Quisque non hendrerit orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac orci blandit, facilisis mi at, pulvinar orci. Aenean finibus euismod finibus. Quisque aliquet non nisl quis posuere. ',
  techUsed: ['Typescript'],
  image: FacebookImage
  },
  {name: 'Portfolio ', 
  description: 'This is my personal website, made to showcase my current projects offering my reflections on my own creative and professional progress',
  techUsed: ['NextJS','React'],
  image: PortfolioImage,
  website: '/',
  },

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