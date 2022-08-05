export const addFilter = (filter = '') => ({
	type: 'ADD_FILTER',
	filter,
});

export const removeFilter = (filter = '') => ({
	type: 'REMOVE_FILTER',
	filter,
});

export const clearFilters = () => ({
	type: 'CLEAR_FILTERS',
});
