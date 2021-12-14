import React, { useEffect, useState } from 'react'

export const CardPokemon = ({ pokemonSelected }) => {
    const { url, name } = pokemonSelected;
    const [ pokemon, setPokemon ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {setPokemon(data)
                setIsLoading(false);
            })        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pokemonSelected])
    
    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return pokemon ? (
        <div>
            <h1 className='pokemonName'>{ name }</h1>
            <img src={pokemon.sprites.front_default} alt="pokemon" />
            <img src={pokemon.sprites.back_default} alt="pokemon" />
            <p>{pokemon.types[0].type.name}</p>
        </div>
    ) : null
}
