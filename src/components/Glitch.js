import React from 'react';

const Glitch = (props) => {
  const { Text } = props;

return (     

  <div className="stack" style={{ "--stacks": 3 }}>
    <span style={{ "--index": 0 }}>{Text}</span>
    <span style={{ "--index": 1 }}>{Text}</span>
    <span style={{ "--index": 2 }}>{Text}</span>
  </div>


  
      );
};

export default Glitch;

