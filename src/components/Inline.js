import { getSuggestedQuery } from '@testing-library/react'
import React from 'react'


const heading = {
    fontSize: '48px',
    color: 'grey'
}
function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
