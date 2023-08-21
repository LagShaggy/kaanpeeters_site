import { derived, get, type Readable } from 'svelte/store';
import { page } from '$app/stores';
import { goto } from '$app/navigation';

export enum Language {
	English = '/en',
	German = '/de'
}

export const language: Readable<Language> = derived(page, ($page) => {
	if ($page.params.lang == 'en') {
		return Language.English;
	} else {
		return Language.German;
	}
});

export const languageReroute = (lang: Language) => {
	goto(lang + '/' + get(page).route.id?.split('/').slice(2).join('/'));
};
