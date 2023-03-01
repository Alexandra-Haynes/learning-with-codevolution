import "./App.css";
import React, { Component, PureComponent } from "react";
import RefsDemo from "./components/RefsDemo";
// import PureComp from "./components/PureComp";
// import ParentComp from "./components/ParentComp";
// import FragmentDemo from "./components/FragmentDemo";
// import Table from "./components/Table";
// import LifecycleA from "./components/LifecycleA";
// import Form from "./components/Form";
// import './appStyles.css';
// import styles from './appStyles.module.css';
// import Stylesheet from "./components/Stylesheet";
// import Inline from "./components/Inline";
// import NameList from "./components/NameList";
// import UserGreeting from "./components/UserGreeting";
// import {Greet} from './components/Greet'
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RefsDemo />
        {/* <ParentComp /> */}
        {/* <PureComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent/> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Greet name = "Alexandra" advice="Try again!" /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name = "Alexandra" advice="try again!"> 
        <p>This is children props</p>
        <button type="">Click me!</button>
        </Greet>
        <Welcome name="Alexx"/> */}
        {/* <Hello />  */}
      </div>
    );
  }
}

export default App;

/*

-------props vs state:
1. props get passed to the comp / state is managed within the comp
2. function params / variables declared in the function body
3. props are immutable / state can be changed
4. can be accessed with     props (func comp  or this.props (class comp)/
   accessed using useState Hook (func comp) or this.state(class comp)

*/
