import React from "react";
import { animals } from "../AnimalsDb";

const SelectAnimal = ({ receivedAnimalImg, result }) => {
  const animalImages = animals.map((animal) => animal.img);

  const randomAnimalImages = [...animalImages].sort(() => Math.random() - 0.5);

  const handleName = (animalImg) => {
    const isSame = animalImg === receivedAnimalImg; 
    result(isSame); 
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            {randomAnimalImages.map((animalImg, index) => (
              <td key={index}>
                <button onClick={() => handleName(animalImg)}>
                  <img
                    src={require(`../assets/fig/${animalImg}`)}
                    alt="animal"
                  />
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectAnimal;
