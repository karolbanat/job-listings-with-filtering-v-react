export default (jobs, filters) => {
	if (!filters) return jobs;

	let filteredJobs = jobs;
	filters.forEach((filter) => {
		filteredJobs = filteredJobs.filter((job) => {
			/* extract from job what is used in filters and transform it to lower case */
			const jobFilters = [job.role, job.level, ...job.languages, ...job.tools].map((filter) => filter.toLowerCase());
			return jobFilters.includes(filter);
		});
	});
	return filteredJobs;
};
