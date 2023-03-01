import React from 'react';


const Hello = () => {
    // return (
    //     <div className = 'dummyClass'>
    //         <h1> Hello!</h1>
    //     </div>
    // )

    //rewriting it without using JSX:

    return React.createElement('div', 
    { id: 'hello', className: 'dummyClass' }, 
    React.createElement('h1', null, 'Helooo!'));
    
    
    //createElement has 3 params: 1. the type of elem, 2. any optional properties 
    //and 3 the children
}

export default Hello;