import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const csr = true;

export const load: PageLoad = () => {
	throw redirect(301, '/de');
};
