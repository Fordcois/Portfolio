import React from 'react';

const MyComponent = () => {
  return (<>
<p>Scroll Up and Down this page to see the parallax scrolling effect.</p>

<div className="parallax">Hello</div>

<div style={{backgroundColor:'green',height:'200px'}}>
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>

</>
  );
};

export default MyComponent;