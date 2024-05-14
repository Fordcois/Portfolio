import React from 'react';
import TechStackDisplay from './tech-stack';

const BrowserDesc = ({Align,projectName,projectDescription,projectTechUsed,github,website}) => {



return (     
  <div className='BrowserDescContainer'>

    <div className={Align === 'Left' ? 'AlignLeft' : 'AlignRight'}>
      <span className="TitlePinkGradient" style={{ marginLeft: 'auto' }}>{projectName.toUpperCase()}</span>
      <div className="TitlePinkGradient-Underline" style={{ marginLeft: (Align === 'Right' ? 'auto' : '0')}}></div>
    </div>

    <p className={Align === 'Left' ? 'Project-DescriptionLeft' : 'Project-DescriptionRight'} >{projectDescription}</p>
    <TechStackDisplay TechStack={projectTechUsed} Github={github} Website={website} Align={Align}/>

  </div>
      );};

export default BrowserDesc;

// style={{paddingRight:(Align === 'Left' ? '15%' : '0%'),
// paddingLeft:(Align === 'Right' ? '15%' : '0%')}}>