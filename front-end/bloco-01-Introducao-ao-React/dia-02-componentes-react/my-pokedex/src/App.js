import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="all-content">
      <h1> Pokedex </h1>
      <p className="more-info"> For more info, click on the pokemon sprite </p>
      <div className="wrapper">
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
