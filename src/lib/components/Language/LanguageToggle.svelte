<script lang="ts">
	import { Language, language, languageReroute } from './language';
	import Toggle from '../UI/Elements/Toggle.svelte';
	import english from '$assets/flags/english.png';
	import german from '$assets/flags/german.png';

	let state: boolean;
	let selectedLanguage: Language;
	let flag: string;

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
		flag = state ? english : german;
	}
</script>

<div class="flex flex-row justify-between items-center gap-3">
	<Toggle bind:on={state} on:click={() => languageReroute(selectedLanguage)} />
	<img src={flag} alt="flag" class="h-10 w-auto" />
</div>
