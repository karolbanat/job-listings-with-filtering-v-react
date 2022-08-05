import React from 'react';
import BulletList from './BulletList';

const JobHeader = (props) => {
	return (
		<header>
			<p>
				{props.company}
				{props.isNew ? <span>New</span> : null}
				{props.isFeatured ? <span>Featured</span> : null}
			</p>
			<h2>{props.position}</h2>
			<BulletList listItems={props.bulletListItems} />
		</header>
	);
};

export { JobHeader as default };
