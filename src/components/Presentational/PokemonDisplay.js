import React, { Component } from "react";
import '../../App.css';

class PokemonDisplay extends Component {
	render() {
		const pokeList = this.props.pokemon.map(pokemon => {
			return (
				<div className='pokemon-display' key={pokemon.id}>
					<div>{pokemon.name}</div>
					<div><img src={pokemon.imageUrl} alt='Pokemon' /></div>
				</div>
			)
		})
		return <div className='pokemon-container'>{pokeList}</div>
	}
}
export default PokemonDisplay;
