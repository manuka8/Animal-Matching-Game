import { useState } from 'react';
import './App.css';
import AnimalName from './components/AnimalName';
import SelectAnimal from './components/SelectAnimal';
import Result from './components/Result';

function App() {
  const [img, setImg] = useState("");
  const [result, setResult] = useState("");

  const handleImg = (selectedImg) => {
    setImg(selectedImg); // Update image in state
  };

  const handleResult = (isSame) => {
    setResult(isSame ? "Correct Match!" : "Wrong Match!"); // Update result
  };

  return (
    <div className="App">
      <div className="header">
        <h2>ANIMAL MATCHING GAME</h2>
      </div>
      <div className="body-container">
        <AnimalName animalImg={handleImg} />
      </div>
      <div>
        <SelectAnimal receivedAnimalImg={img} result={handleResult} />
      </div>
      <div>
        <Result receivedResult={result} />
      </div>
    </div>
  );
}

export default App;
