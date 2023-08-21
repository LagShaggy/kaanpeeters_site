<script lang="ts">
	import { language } from './languageStores';
	import { readable } from 'svelte/store';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { Language } from './language.enum';

	export const langStore = readable<Language>(Language.German, (set) => {
		set(Language.German);
	});
</script>
