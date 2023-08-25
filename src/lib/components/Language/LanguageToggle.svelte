<script lang="ts">
	import { Language, language, languageReroute } from './language';
	import Toggle from '../UI/Elements/Toggle.svelte';
	import english from '$assets/flags/english.png';
	import german from '$assets/flags/german.png';
	import { slide, fade, scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

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
		flag = state ? german : english;
	}
</script>

<div class="flex flex-row justify-between items-center gap-3">
	<Toggle bind:on={state} on:click={() => languageReroute(selectedLanguage)} />
	<div>
		<div class="grid place-items-center">
			{#key flag}
				<img
					in:fade={{ duration: 400 }}
					out:fade={{ duration: 400 }}
					src={flag}
					alt="flag"
					class="h-10 w-10 row-span-full col-span-full"
				/>
			{/key}
		</div>
	</div>
</div>
