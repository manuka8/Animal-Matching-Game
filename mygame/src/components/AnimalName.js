import React from "react";
import { animals } from "../AnimalsDb";

const AnimalName = ({ animalImg }) => {
  const randnum = Math.floor(Math.random() * animals.length);
  animalImg(animals[randnum].img);
  return (
    <div>
      <h1>Animal Name</h1>
      <p>{animals[randnum].name}</p>
    </div>
  );
};

export default AnimalName;
