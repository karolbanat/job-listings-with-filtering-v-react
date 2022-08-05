import React from 'react';
import { connect } from 'react-redux';
import JobListItem from './JobListItem';
import jobSelector from '../selectors/jobs';

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
		const jobs = jobSelector(this.state.jobs, this.props.filters);
		return (
			<ul>
				{jobs.map((job) => (
					<li key={job.id}>
						<JobListItem {...job} />
					</li>
				))}
			</ul>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters,
});

export default connect(mapStateToProps)(JobList);
