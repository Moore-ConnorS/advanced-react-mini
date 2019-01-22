import React from "react";


function PokemonRender(props) {
    const pokeList = props.data.map(pokemon => {
        return (
            <div className='pokemon-display' key={pokemon.id}>
                <div>{pokemon.name}</div>
                <div><img src={pokemon.imageUrl} /></div>
            </div>
        )
    })
    return (
        <div className='pokemon-container'>
            {pokeList}
        </div>
    )
}

export default PokemonRender