import axios from 'axios';

const fetchPokeomon = () => {
	axios
		.get('https://pokeapi.co/api/v2/ability/{id or name}/')
		.then(function (response) {
			// handle success
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
};
