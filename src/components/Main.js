import React from 'react';
import { useSelector } from 'react-redux';
import Filters from './Filters';
import JobList from './JobList';

const Main = () => {
	const filters = useSelector((state) => state.filters);

	return (
		<main>
			<div className='flow container' style={{ '--flow-spacer': '2.5em' }}>
				{filters.length > 0 ? <Filters /> : null}
				<JobList />
			</div>
		</main>
	);
};

export { Main as default };
