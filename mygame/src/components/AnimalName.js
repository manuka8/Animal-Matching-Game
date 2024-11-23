import React from 'react'
import { animals } from '../AnimalsDb';
const AnimalName = () => {
    const randnum = Math.floor(Math.random() * 10) + 1;
  return (
    <div>
      <h1>Animal Name</h1>
      <p>{animals[randnum].name}</p>
    </div>
  )
}

export default AnimalName
