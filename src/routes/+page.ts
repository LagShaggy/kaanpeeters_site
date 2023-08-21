import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const csr = true;

export const load: PageLoad = ({ params }) => {
	params;
	if (!params) {
		throw redirect(301, '/de/');
	}
	return {};
};
