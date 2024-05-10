import React from 'react';

const BrowserDesc = ({Align,projectName,projectDescription,projectTechUsed,github,website}) => {

return (     
  <div style={{backgroundColor:'blue',width:'60%', textAlign:Align}}>
            {/* <span className="TitlePinkGradient">{projectName.toUpperCase()}</span><br/>
            <div className="TitlePinkGradient-Underline"></div>

            <p className="Project-Description">{projectDescription}</p> */}

            <span className="TitlePinkGradient">{projectName.toUpperCase()}</span><br/>
            <div className="TitlePinkGradient-Underline"></div>

            <p>{projectDescription}</p>




  </div>
      );
};

export default BrowserDesc;
