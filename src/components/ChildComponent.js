import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet your parent</button> */}
      <button onClick={() => props.greetHandler('Alexandra')}>Greet your parent</button>
    </div>
  )
}
/*
Arrow func is the simplest way to pass params from the child comp to the parent
This way to need to add () to the handler and you can also pass param
Now we can go back to parent comp and add a param to the greetHandler, childName

*/

export default ChildComponent

/*

This is how you pass methods as props:
1. In parent comp define the method
2. In the child comp tag pass the method as a prop
3. In the child comp access the method using the props object
   (if you need to pass a param, use the arrow func syntax)

*/