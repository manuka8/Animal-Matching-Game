import React from 'react'
import { animals } from '../AnimalsDb'
const SelectAnimal = () => {
  const animalimg = [];
  for (let i = 0; i < animals.length; i++) {
    animalimg.push(animals[i].img);
  }
  const randomAnimalimg = [...animalimg].sort(() => Math.random() - 0.5);
  return (
    <div>
      <table>
        {randomAnimalimg.map((animal,index)=>(
          <td><img src={require('../assets/fig/'+animal)}/></td>
        )
        )}
      </table>
    </div>
  )
}

export default SelectAnimal
