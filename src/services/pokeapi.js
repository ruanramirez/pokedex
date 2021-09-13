import axios from '@/axios';

const getPokemons = ({limit, offset}) => axios.get(`/pokemon?limit=${limit}&offset=${offset}`);

const getPokeminByName = name => axios.get(`/pokemon/${name}`);

export default{
	getPokemons,
	getPokeminByName,
};
