<script lang="ts">
	import type { Writing } from '$lib/types';
	import { flip } from 'svelte/animate';
	import WritingItem from './WritingItem.svelte';

	export let writings: Writing[];
	export let downloadPdf: (s: string) => {};
	console.log(writings);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 content-around">
	{#each writings as writing, index (writing.id)}
		<div animate:flip class="flex justfify-center items-center m-auto">
			<WritingItem
				poem={{ name: writing.name, text: writing.text }}
				downloadPdf={() => downloadPdf(writing.pdfid ?? '')}
			/>
		</div>
	{/each}
</div>
