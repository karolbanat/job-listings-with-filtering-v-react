import React from 'react';
import JobListItem from './JobListItem';

/* 
    (?) gets jobs from JSON file or loads from state (?) 
    displays jobs using filters
    if filters empty generate all jobs
    if filters not empty generate jobs that have tags in filters
*/
const JobList = () => {
	return (
		<ul>
			<li>
				<JobListItem />
			</li>
		</ul>
	);
};

export { JobList as default };
