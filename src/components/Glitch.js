import React from 'react';

const Glitch = ({Name,Title}) => {

return (     

  <div className="stack" style={{ "--stacks": 3 }}>
    <span style={{ "--index": 0 }}>{Name}</span>
    <span style={{ "--index": 1 }}>{Name}</span>
    <span style={{ "--index": 2 }}>{Name}</span>
  </div>


  
      );
};

export default Glitch;

