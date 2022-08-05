import React from 'react';
import JobListItem from './JobListItem';

/* 
    gets jobs from JSON file to state property
    displays jobs using filters
    if filters empty generate all jobs
    if filters not empty generate jobs that have tags in filters
*/
class JobList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
		};
	}

	componentDidMount() {
		fetch('./data.json')
			.then((res) => res.json())
			.then((res) => this.setState(() => ({ jobs: res })));
	}

	render() {
		return (
			<ul>
				<li>
					<JobListItem />
				</li>
			</ul>
		);
	}
}

export { JobList as default };
