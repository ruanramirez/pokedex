import axios from '@/axios';

const getPokemons = ({limit, offset}) => axios.get(`/pokemon?limit=${limit}&offset=${offset}`);

const getPokemonByName = name => axios.get(`/pokemon/${name}`);

export default{
	getPokemons,
	getPokemonByName,
};
