import state from './state';

export default {
	//Updates the pokedex loading offset
	updateOffset() {
		state.offset += state.limit;
	},
	//Adds pokemons to the pokedex for the infinite loading
	setList(list) {
		state.list.push(...list);
		state.tmpList.push(...list);
	},
	//Informs if the pokedex needs more data
	setListHasNext(flag) {
		state.listHasNext = flag;
	},
	//Informs if the pokedex has finished fetching data
	setListHasCompleted(flag) {
		state.lisHasCompleted = flag;
	},
	//Informs is the pokedex got an error
	setListError(flag) {
		state.ListHasError = flag;
	},
	//Resets the pokedex to the last cache and removes search information
	resetList() {
		state.list = [...state.tmpList];
		state.isPokeminSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
	},
};
