import React, { Component } from "react";
import axios from 'axios';
import PokemonDisplay from './PokemonDisplay';

class PokemonContainer extends Component {
	constructor() {
		super();
		this.state = {
			pokemon: []
		}
	}


	componentDidMount() {
		axios.get('https://api.pokemontcg.io/v1/cards?setCode=base1').then((res) => {
			this.setState({
				pokemon: res.data.cards
			})
		})
	}

	render() {
		return <div>
			<PokemonDisplay pokemon={this.state.pokemon} />
		</div>
	}
}

export default PokemonContainer;