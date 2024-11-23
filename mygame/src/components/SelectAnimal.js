import React from "react";
import { animals } from "../AnimalsDb";
import '../css/SelectAnimal.css'

const SelectAnimal = ({ receivedAnimalImg, result }) => {
  const animalImages = animals.map((animal) => animal.img);

  const randomAnimalImages = [...animalImages].sort(() => Math.random() - 0.5);

  const handleName = (animalImg) => {
    const isSame = animalImg === receivedAnimalImg; 
    result(isSame); 
  };

  return (
    <div>
      <h3>Select Animal</h3><br/>
      <table>
        <tr>
          <td>
          <button onClick={() => handleName(randomAnimalImages[0])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[0])}/>
          </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[1])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[1])}/>
            </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[2])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[2])}/>
          </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[3])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[3])}/>
          </button>>
          </td>
        </tr>
        <tr>
          <td>
          <button onClick={() => handleName(randomAnimalImages[4])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[4])}/>
          </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[5])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[5])}/>
            </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[6])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[6])}/>
            </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[7])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[7])}/>
          </button>
          </td>
        </tr>
        <tr>
          <td>
          <button onClick={() => handleName(randomAnimalImages[8])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[8])}/>
            </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[9])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[9])}/>
            </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[10])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[10])}/>
            </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[11])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[11])}/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
          <button onClick={() => handleName(randomAnimalImages[12])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[12])}/>
            </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[13])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[13])}/>
            </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[14])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[14])}/>
            </button>
          </td>
          <td>
          <button onClick={() => handleName(randomAnimalImages[15])}>
            <img src={require(`../assets/fig/`+randomAnimalImages[15])}/>
          </button>
          </td>
        </tr>
      
      </table>
    </div>
  );
};

export default SelectAnimal;
