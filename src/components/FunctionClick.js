//snippet: rfce

import React from 'react'

function FunctionClick() {

 const clickHandler = () => {
   console.log('Button clicked')
 }

  

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      {/*make sure not to add () to {clickHandler}, this a function, not a func call */}
    </div>
  )
}

export default FunctionClick
