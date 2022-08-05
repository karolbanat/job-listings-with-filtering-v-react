import React from 'react';
import FilterList from './FilterList';

/* 
    shows only if filters are available
    clear button dispatches remove all filters
*/
const Filters = () => {
	return (
		<div>
			<FilterList />
			<button>Clear</button>
		</div>
	);
};

export { Filters as default };
