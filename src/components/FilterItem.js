import React from 'react';
import DeleteIcon from '../images/icon-remove.svg';

/* 
    inserts filter text
    uses dispatch to remove filter from filters
*/
const FilterItem = () => {
	return (
		<div>
			<p>Text</p>
			<button aria-label='Delete item'>
				<img src={DeleteIcon} alt='' />
			</button>
		</div>
	);
};

export { FilterItem as default };
