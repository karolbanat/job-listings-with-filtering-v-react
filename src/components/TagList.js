import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../actions/filters';

const TagList = (props) => {
	const dispatch = useDispatch();

	return (
		<ul className='job-item__tags | flex-wrap'>
			{props.tags.map((tag) => (
				<li key={tag}>
					<button onClick={() => dispatch(addFilter(tag))} className='button'>
						{tag}
					</button>
				</li>
			))}
		</ul>
	);
};

export { TagList as default };
