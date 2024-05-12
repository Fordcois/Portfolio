import React from 'react';
import TechStackDisplay from './tech-stack';

const BrowserDesc = ({Align,projectName,projectDescription,projectTechUsed,github,website}) => {



return (     
  // TODO Media query This

  <div style={{justifyContent:'flex-start',width:'70%',padding:'5px'}}>

    <div style={{textAlign:Align}}>
      <span className="TitlePinkGradient" style={{ marginLeft: 'auto' }}>{projectName.toUpperCase()}</span>
      <div className="TitlePinkGradient-Underline" style={{ marginLeft: (Align === 'Right' ? 'auto' : '0')}}></div>
    </div>

    <p className="Project-Description" style={{paddingRight:(Align === 'Left' ? '15%' : '0%'),paddingLeft:(Align === 'Right' ? '15%' : '0%')}}>{projectDescription}</p>
    <TechStackDisplay TechStack={projectTechUsed} Github={github} Website={website} Align={Align}/>

  </div>
      );};

export default BrowserDesc;
