import type { PageLoad } from './$types';

export const load = (({ params }) => {
	const data = {
		slug: params,
		name: 'dorian',
		developer: 'filip',
		incomePerProject: 150
	};
	return data;
}) satisfies PageLoad;
