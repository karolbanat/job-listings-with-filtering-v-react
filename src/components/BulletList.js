import React from 'react';

/* 
    gets data from props
    generates list for additional info (time_added, contract, location)
*/
const BulletList = () => {
	return (
		<ul>
			<li>1d ago</li>
			<li>Full time</li>
			<li>USA only</li>
		</ul>
	);
};

export { BulletList as default };
