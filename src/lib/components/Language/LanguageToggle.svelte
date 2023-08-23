<script lang="ts">
	import { Language, language, languageReroute } from './language';
	import Toggle from '../UI/Elements/Toggle.svelte';
	import { t } from './language';
	import Text from '../UI/Elements/Text.svelte';

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

<div class="flex flex-row justify-between mx-3">
	<div class="mr-2">
		<Text>{$t['language.text']}</Text>
	</div>
	<Toggle bind:on={state} on:click={() => languageReroute(selectedLanguage)} />
</div>
