const jobSelector = (jobs, filters) => {
	if (filters.length === 0) return jobs;

	let filteredJobs = jobs;
	filters.forEach((filter) => {
		filteredJobs = filteredJobs.filter((job) => {
			/* extract from job what is used in filters */
			const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];
			return jobFilters.includes(filter);
		});
	});
	return filteredJobs;
};

export default jobSelector;
