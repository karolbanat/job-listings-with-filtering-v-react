import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFilter } from '../actions/filters';
import DeleteIcon from '../images/icon-remove.svg';

const FilterItem = (props) => {
	const dispatch = useDispatch();

	return (
		<div className='filter'>
			<p className='filter__text'>{props.filter}</p>
			<button
				aria-label={`Delete ${props.filter} filter`}
				onClick={() => dispatch(removeFilter(props.filter))}
				className='filter__remove-button'>
				<img src={DeleteIcon} alt='' />
			</button>
		</div>
	);
};

export { FilterItem as default };
