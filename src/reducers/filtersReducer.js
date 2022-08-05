const filtersReducerDefaultState = [];

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_FILTER':
			return state.includes(action.filter) ? state : [...state, action.filter.toLowerCase()];
		case 'REMOVE_FILTER':
			return state.filter((filter) => filter !== action.filter.toLowerCase());
		case 'CLEAR_FILTERS':
			return [];
		default:
			return state;
	}
};

export default filtersReducer;
