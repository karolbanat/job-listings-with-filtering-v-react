import React from 'react';

/* 
    gets data from props
    displays list of tags for job
    uses dispatch to add filter to filters list
*/
const TagList = () => {
	return (
		<ul>
			<li>
				<button>Frontend</button>
			</li>
			<li>
				<button>Senior</button>
			</li>
			<li>
				<button>HTML</button>
			</li>
			<li>
				<button>CSS</button>
			</li>
			<li>
				<button>JavaScript</button>
			</li>
		</ul>
	);
};

export { TagList as default };
