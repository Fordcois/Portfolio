import React from 'react';
import Socials from './Socials';

const Introduction = () => {

const Text = 'SAMUEL FORD'

return (     
<div>
  <div className="stack" style={{ "--stacks": 3 }}>
    <span style={{ "--index": 0 }}>{Text}</span>
    <span style={{ "--index": 1 }}>{Text}</span>
    <span style={{ "--index": 2 }}>{Text}</span>
  </div>
</div>

  
      );
};

export default Introduction;

