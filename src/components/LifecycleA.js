import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alexandra",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Codevolution'
    })
  }

  render() {
    console.log("LifecycleA render");
    return (
      <>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </>
    );
  }
}

export default LifecycleA;

/* 
Execution order during the MOUNTING phase:

---no children:
1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount

---with child B:
1. constructor A
2. getDerivedStateFromProps A
3. render A
4. constructor B
5. getDerivedStateFromProps B
6. render B
7. componentDidMount B
8. componentDidMount A


Execution order during the UPDATING phase:

1. getDerivedStateFromProps A
2. shouldComponentUpdate A
3. render A
4. getDerivedStateFromProps B
5. shouldComponentUpdate B
6. render B
7. getSnapshotBeforeUpdate B
8. getSnapshotBeforeUpdate A
9. componentDidUpdate B
10.componentDidUpdate A


*/

