import React, { useEffect, useState } from 'react'
import './App.css';
import { CardPokemon } from './components/CardPokemon';
import { PokemonList } from './components/PokemonsList';

function App() {

  const [ dataPokemons, setDataPokemons ] = useState([]);
  const [ pokemonSelected, setPokemonSelected ] = useState(null);

  useEffect(()=> {

      fetch('https://pokeapi.co/api/v2/pokemon')
          .then(res => res.json())
          .then(data => setDataPokemons(data.results))

  }, []);

  console.log(dataPokemons);


  return (
    <div className="App">
      <PokemonList dataPokemons={dataPokemons} setPokemonSelected={ setPokemonSelected }/>
      {pokemonSelected && <CardPokemon pokemonSelected={ pokemonSelected }/>}
    </div>
  );
}

export default App;
