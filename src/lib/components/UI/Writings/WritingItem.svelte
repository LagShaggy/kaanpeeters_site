<script lang="ts">
	import type { Writing } from '$lib/types';
	import Text from '../Elements/Text.svelte';

	export let writing: Writing;

	// displaying logic
	let show: boolean = false;

	const toggleShow = () => {
		show = !show;
	};
</script>

<button
	class="w-80 h-80 flex 2xl:w-[25rem] 2xl:h-[25rem] items-center justify-center border border-gray-950 rounded-3xl transition-all {show
		? 'w-screen'
		: ''}"
	on:click={toggleShow}
>
	{#if !show}
		<Text>
			{writing.name}
		</Text>
	{:else}
		<Text>
			{writing.text}
		</Text>
	{/if}
</button>
