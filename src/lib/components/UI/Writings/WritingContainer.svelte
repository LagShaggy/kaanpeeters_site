<script lang="ts">
	import type { Database } from '$lib/supabase/supabase.types';
	import type { Writing } from '$lib/types';
	import { flip } from 'svelte/animate';
	import WritingItem from './WritingItem.svelte';

	export let writings: Writing[];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 content-around">
	{#each writings as writing, index (writing.id)}
		<div animate:flip class="flex justfify-center items-center m-auto">
			<WritingItem {writing} />
		</div>
	{/each}
</div>
