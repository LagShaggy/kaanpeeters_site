import { derived, type Readable } from 'svelte/store';
import { page } from '$app/stores';
import { Language } from './language.enum';

export const language: Readable<Language> = derived(page, ($page) => {
	if ($page.params.lang == 'en') {
		return Language.English;
	} else {
		return Language.German;
	}
});
