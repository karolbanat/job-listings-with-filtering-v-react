import React from 'react';
import CompanyLogo from '../images/account.svg'; // temporary icon
import JobHeader from './JobHeader';
import TagList from './TagList';

/* 
    gets item by id
    displays job item conainer
*/

const JobListItem = () => {
	return (
		<article>
			<img src={CompanyLogo} alt='' />
			<JobHeader />
			<TagList />
		</article>
	);
};

export { JobListItem as default };
