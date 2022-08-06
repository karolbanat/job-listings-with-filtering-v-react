import React from 'react';
import JobHeader from './JobHeader';
import TagList from './TagList';

const JobListItem = (props) => {
	return (
		<article className={`job-item ${props.featured ? 'job-item--featured' : ''}`}>
			<img src={props.logo} alt='' className='job-item__avatar' />
			<JobHeader
				company={props.company}
				isNew={props.new}
				isFeatured={props.featured}
				position={props.position}
				bulletListItems={[props.postedAt, props.contract, props.location]}
			/>
			<TagList tags={[props.role, props.level, ...props.languages, ...props.tools]} />
		</article>
	);
};

export { JobListItem as default };
