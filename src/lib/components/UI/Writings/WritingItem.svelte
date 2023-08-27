<script lang="ts">
	import type { Writing } from '$lib/types';
	import { flip } from 'svelte/animate';
	import Text from '../Elements/Text.svelte';
	import Poem from './Poem.svelte';

	export let writing: Writing;

	// displaying logic
	let show: boolean = false;

	const toggleShow = () => {
		show = !show;
	};
</script>

<button
	class="w-80 h-80 flex 2xl:w-[25rem] 2xl:h-[25rem] items-center justify-center border border-gray-950 rounded-3xl transition-all {show
		? 'w-full'
		: ''}"
	on:click={toggleShow}
>
	{#if !show}
		<Text>
			{writing.name}
		</Text>
	{:else}
		<Poem poem={writing.text ?? ''} />
	{/if}
</button>
