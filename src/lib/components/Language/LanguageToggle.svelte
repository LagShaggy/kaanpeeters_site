<script lang="ts">
	import { Language, language, languageReroute } from './language';
	import Toggle from '../UI/Elements/Toggle.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let state: boolean;
	let selectedLanguage: Language;

	language.subscribe((value) => {
		if (value == Language.German) {
			state = true;
		} else {
			state = false;
		}
	});

	$: {
		state;
		selectedLanguage = state ? Language.English : Language.German;
	}
</script>

<Toggle bind:on={state} on:click={() => languageReroute(selectedLanguage)} />
