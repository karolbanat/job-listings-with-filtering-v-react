import React from 'react';
import Filters from './Filters';
import JobList from './JobList';

const Main = () => {
	return (
		<main>
			<Filters />
			<JobList />
		</main>
	);
};

export { Main as default };
