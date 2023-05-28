import axios from 'axios';
import { Alert } from 'react-native';

export const fetchPokemon = (lowercaseSearchPokemon) => {
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
			Alert.alert('Error', 'Pokemon not found', [
				{
					text: 'OK',
					onPress: () => console.log('OK Pressed'),
				},
			]);
		});
};


