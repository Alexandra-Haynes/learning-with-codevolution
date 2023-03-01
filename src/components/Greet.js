import React from 'react';

// function Greet() {
//     return <h1>Hello, Alex</h1>
// }

export const Greet = props => {
    // console.log(props)
    const {name, advice} = props
    return (
        <div>
         <h1>Hello,  {name}! {advice} Let's gooo!</h1>
         {props.children}
         </div>
    )
}
// export default Greet;

/*

With named export you need to import it as
import {Greet} from './components/Greet' with {}


Props is an Object 


Distructuring props and state:

----func comp: 2 ways:
A) destruct in the param: const Greet = ({name,advice}) = { // ..Hello {name} {advice} }
B) destruct in the func body: const Greet = props => { const {name,adive} = props }



*/
