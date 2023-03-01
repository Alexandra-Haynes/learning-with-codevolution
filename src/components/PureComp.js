//snippet rpce

import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("PureComponent render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;

/*

Pure Comp is not rendered every 2sec because the previous prop value is 
no different from current one (shallow comparison), 
hence it does not rerend -> performance boost

If we make ParentComp a Pure Component, it will not rerender.
If the parent does not rerender, the children will not rerender either. 

Never mutate the state, always return a new object that reflects the new state.

*/
