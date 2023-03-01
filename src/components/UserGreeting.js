import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    //------SHORT CIRCUIT:
    //*to return smth or nothing

    return this.state.isLoggedIn && 
    <div> Welcome, Alexandrica! </div>


    /*

  ------TERNARY CONDITIONAL:
    *can be used inside JSX
    *used most often

  return (
    this.state.isLoggedIn ? 
    <div> Welcome, Aleee! </div> :
    <div> Welcome... </div>
  )


   --------ELEMENT VARIABLE METHOD:

   let message
   if (this.state.isLoggedIn) {
    message = <div>Welcome, Alexx</div>
   } else {
    message = <div>Welcome, stranger danger!</div>
   }
   return <div> {message} </div>

   


   ---------IF ELSE METHOD:

    if (this.state.isLoggedIn) {
      return <div> Welcome, Alex!</div>;
    } else {
      return <div> Welcome, guest!</div>;
    } //if else doesn't work inside JSX


    _------ORIGINAL:
    
    return (
      <div> 
         <div> Welcome, Alexandra! </div>
       <div> Welcome, guest!     </div>
    </div>
    )
    */


  }
}

export default UserGreeting;
