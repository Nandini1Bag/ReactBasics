
import React from 'react';

// This function takes a component..
const withClass =(WrappedComponent,className) =>{
// ...and returns another component...
  return props=>(
      <div className={className}>
        <WrappedComponent {...props}/>  
      </div>
  );

};


export default withClass;