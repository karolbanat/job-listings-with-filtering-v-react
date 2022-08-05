import React from 'react';
import { useSelector } from 'react-redux';
import Filters from './Filters';
import JobList from './JobList';

const Main = () => {
	const filters = useSelector((state) => state.filters);

	return (
		<main>
			{filters.length > 0 ? <Filters /> : null}
			<JobList />
		</main>
	);
};

export { Main as default };
