//snippet: rce = class comp % rconst = constructor
//Shift + Alt + F to format code

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }

    this.setState ( prev => ({
        count: prev.count + 1 //pass in a function to update state, when you have to update based on prev
    }));



    // console.log(this.state.count) will not work properly because
    //setState is asynchronous -> Solution: pass a callback func as a second param for setState
    }

   //never modify the state directly, use setState

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
