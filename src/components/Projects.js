import React from 'react';
import Screen from './screen';

const projects = [
  { name: 'Twitter', description: 'A website for posting Tweets', techUsed: ['Mongo', 'Express', 'React', 'NodeJS'] },
  { name: 'Youtube', description: 'A website for Watching Videos', techUsed: ['Type Script'] },
  { name: 'Reddit', description: 'A website for posting threads', techUsed: ['SQL','Flask'] }
];

const Projects = () => {
  return (
    <>
    {projects.map(project => (

      <div key={project.name} style={{ display: 'flex', width: '100vw' }}>
        
        <div style={{ flex: '35%', padding: '2% 2%' }}>
          <Screen title={project.name} />
        </div>

          <div style={{ flex: '65%', padding: '1% 1%' }}>
            <div>
              <span className='TitlePinkGradient'>{project.name.toUpperCase()}</span>
              <div style={{ width: '75%', height: '4px', background: '#ef9380' }}></div>
            </div>

            <div style={{ backgroundColor: '#51bbcf', borderRadius:'25px',padding:'5% 1%' }}>
              <span>Description:</span>
              <p>{project.description}</p>
            </div>

            <div style={{ backgroundColor: '#51bbcf' }}>
              <span>Technologies Used:</span>
              {project.techUsed.map((tech, index) => (<p key={index}>{tech}</p>))}
            </div>
          </div>
      </div>
    ))}
  </>
  );
};

export default Projects;