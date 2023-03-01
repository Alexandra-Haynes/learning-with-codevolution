import React, {Component} from 'react';


class Message extends Component {

    constructor(){
        super()
        this.state = {
             message: 'Welcome, visitor!!!'
        }
    }
   
    changeMessage () {
        //setState accepts an object which will be the new state
        this.setState( {
            message: 'Thank you!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ ()=>  this.changeMessage()} >Subscribe</button>
            </div> 
        ) 
        
    }
}

export default Message;

