import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { language } from '$lib/components/Language/language';
import { get } from 'svelte/store';
import { redirect } from '@sveltejs/kit';

export const langRedirect = (route: string) => {
	const finalRoute: string = get(language) + route;
	if (browser) {
		return goto(finalRoute);
	} else {
		return redirect(301, finalRoute);
	}
};
