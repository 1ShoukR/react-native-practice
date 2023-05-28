import axios from 'axios';

export const fetchPokeomon = (lowercaseSearchPokemon) => {
	console.log('this is the searchPokemon', lowercaseSearchPokemon);
	axios
		.get(`https://pokeapi.co/api/v2/pokemon/${lowercaseSearchPokemon}/`)
		.then(function (response) {
			// handle <successwq></successwq>
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
};


