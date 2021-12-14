import React from 'react'
import './styles.css'
import { ReactComponent as Pokeball } from '../../pokeball.svg'

export const PokemonList = ({ dataPokemons, setPokemonSelected }) => {

    return (
        <div className='pokemonListWrapper'>
            <ul className='pokemonList'>
               
                {dataPokemons.map(pokemon => 
                 <li className='pokemonItem' onClick={()=> setPokemonSelected(pokemon)} key={`poke-${pokemon.name}`}><Pokeball className='pokeBall'/>{pokemon.name}</li>)}
            </ul>
        </div>
    )
}
