import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	console.log('throw redirect to de home');
	throw redirect(301, '/de/home');
};
