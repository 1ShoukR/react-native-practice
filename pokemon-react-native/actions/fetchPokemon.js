import axios from 'axios';

const fetchPokeomon = (options) => {
	axios
		.get(`https://pokeapi.co/api/v2/ability/${options}/`)
		.then(function (response) {
			// handle <successwq></successwq>
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
};
