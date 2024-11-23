import React from "react";
import { animals } from "../AnimalsDb";

const AnimalName = ({ animalImg }) => {
  const randnum = Math.floor(Math.random() * animals.length);
  animalImg(animals[randnum].img);
  return (
    <div>
      <h2>Animal Name</h2>
      <p>{animals[randnum].name}</p>
    </div>
  );
};

export default AnimalName;
