import React from 'react';
import { useSelector } from 'react-redux';
import FilterItem from './FilterItem';

const FilterList = () => {
	const filters = useSelector((store) => store.filters);

	return (
		<ul>
			{filters.map((filter) => (
				<li key={filter}>
					<FilterItem filter={filter} />
				</li>
			))}
		</ul>
	);
};

export { FilterList as default };
