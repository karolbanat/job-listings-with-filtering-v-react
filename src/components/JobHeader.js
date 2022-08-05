import React from 'react';
import BulletList from './BulletList';

const JobHeader = (props) => {
	return (
		<header className='flow' style={{ '--flow-spacer': '.5em' }}>
			<p className='job-item__company'>
				{props.company}
				{props.isNew ? <span className='featured featured--new'>New!</span> : null}
				{props.isFeatured ? <span className='featured featured--featured'>Featured</span> : null}
			</p>
			<h2 className='job-item__position'>
				<a href='/'>{props.position}</a>
			</h2>
			<BulletList listItems={props.bulletListItems} />
		</header>
	);
};

export { JobHeader as default };
