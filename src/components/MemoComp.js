import React from 'react'

function MemoComp({name}) {
    console.log('Renderint Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)


/*

Memo is the correspondent Pure Component for functional components

React.memo(MemoComp) higher order component

*/
