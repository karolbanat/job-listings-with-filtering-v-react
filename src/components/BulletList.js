import React from 'react';

const BulletList = (props) => {
	return (
		<ul className='bullet-list'>
			{props.listItems.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};

export { BulletList as default };
