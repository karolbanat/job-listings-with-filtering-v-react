import React from 'react';
import FilterItem from './FilterItem';

/* 
    gets filters from store
    generate item for each filter
*/
const FilterList = () => {
	return (
		<ul>
			<li>
				<FilterItem />
			</li>
		</ul>
	);
};

export { FilterList as default };
