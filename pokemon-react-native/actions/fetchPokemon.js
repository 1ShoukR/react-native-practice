import axios from 'axios';
import { useState } from 'react';
import { Alert } from 'react-native';

export const fetchPokemon = async (lowercaseSearchPokemon) => {
	console.log('this is the searchPokemon', lowercaseSearchPokemon);
	try {
		const response = await axios
			.get(`https://pokeapi.co/api/v2/pokemon/${lowercaseSearchPokemon}/`);
		// handle success
		console.log(response);
		return response.data;
	} catch (error) {
		// handle error
		console.log(error);
		throw error; // Rethrow the error to be caught in the calling function
	}
};
