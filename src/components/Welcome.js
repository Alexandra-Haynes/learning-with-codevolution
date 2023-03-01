import React, {Component} from 'react';


class Welcome extends Component {
    render() {
        return <h1>Welcome, {this.props.name}</h1>
    }
}

export default Welcome;

/*

Distructuring props and state:
----class comp:
generally we tend to destr in render method: 
const {name, advice} = this.props (...) Welcome {name}
const {state1, state2} = this.state



Props are immutable (thier value can not be changed)
props.name = "Alex" ---> error

For class components, you simply need to add this keyword:
{this.props.name}



*/
