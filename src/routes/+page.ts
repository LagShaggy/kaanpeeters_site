import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { language } from '$lib/components/Language/language';
import { get } from 'svelte/store';

export const csr = true;

export const load: PageLoad = () => {
	throw redirect(301, '/de');
};
