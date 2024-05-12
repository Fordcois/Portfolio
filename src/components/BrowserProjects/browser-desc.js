import React from 'react';
import TechStackDisplay from './tech-stack';

const BrowserDesc = ({Align,projectName,projectDescription,projectTechUsed,github,website}) => {

return (     
  // TODO Media query This

  <div style={{backgroundColor:'blue',justifyContent:'flex-start',width:'70%'}}>
      {/* Right Align  */}
    <div style={{backgroundColor:'white',textAlign:'right'}}>
      <span className="TitlePinkGradient" style={{ marginLeft: 'auto' }}>{projectName.toUpperCase()}</span>
      <div style={{ width: '75%', marginLeft: 'auto', backgroundColor: 'black',height:'5px' }}></div>
    </div>
    {/* Left Align */}
    <div style={{backgroundColor:'white',textAlign:'left'}}>
      <span className="TitlePinkGradient" style={{ marginLeft: 'auto' }}>{projectName.toUpperCase()}</span>
      <div style={{ width: '75%', backgroundColor: 'black',height:'5px' }}></div>
    </div>

            <p>{projectDescription}</p>
            <TechStackDisplay TechStack={projectTechUsed} Github={github} Website={website} />




  </div>
      );
};

export default BrowserDesc;
