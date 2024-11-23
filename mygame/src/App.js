import './App.css';
import AnimalName from './components/AnimalName';
import SelectAnimal from './components/SelectAnimal';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h2>ANIMAL MATCHING GAME</h2>
      </div>
      <div className='body-container'>
        <AnimalName />
      </div>
      <div>
        <SelectAnimal/>
      </div>
    </div>
  );
}

export default App;
