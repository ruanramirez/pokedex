import Vue from 'vue';

const LIMIT = 25;
const OFFSET = 0;

export default Vue.observable({
	list: [],
	tmpList: [],
	listHasNext: false,
	listHasCompleted: false,
	ListHasError: false,

	isSearching: false,
	isPokeminSearch: false,
	searchHasError: false,

	limit: LIMIT,
	offset: OFFSET,
});
