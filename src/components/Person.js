import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1> I am {person.name} </h1>
      <h2>I know {person.skill}</h2>
      <p> ala bala portocala</p>
      <br/>
      <hr />
      
    </div>
  )
}

export default Person
