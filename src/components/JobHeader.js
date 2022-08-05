import React from 'react';
import BulletList from './BulletList';

/* 
    gets data from props
    renders company name
        if company has new -> displays 'new' span
        if company has featured -> displays 'featured' span
    displays job name
*/
const JobHeader = () => {
	return (
		<header>
			<p>
				Photosnap <span>New</span> <span>Featured</span>
			</p>
			<h2>Senior Frontend Developer</h2>
			<BulletList />
		</header>
	);
};

export { JobHeader as default };
