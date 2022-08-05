import React from 'react';
import JobHeader from './JobHeader';
import TagList from './TagList';

const JobListItem = (props) => {
	return (
		<article>
			<img src={props.logo} alt='' />
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
