import React from 'react';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../actions/filters';
import FilterList from './FilterList';

const Filters = () => {
	const dispatch = useDispatch();

	return (
		<div className='filters'>
			<FilterList />
			<button onClick={() => dispatch(clearFilters())} className='button button--link'>
				Clear
			</button>
		</div>
	);
};

export { Filters as default };
