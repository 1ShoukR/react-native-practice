import axios from 'axios';

export const fetchPokeomon = (options) => {
	console.log("this is the options", options)
	axios
		.get(`https://pokeapi.co/api/v2/pokemon/${options}/`)
		.then(function (response) {
			// handle <successwq></successwq>
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
};


