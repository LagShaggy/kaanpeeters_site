<script lang="ts">
	import Text from '../Elements/Text.svelte';
	import EventItem from './EventItem.svelte';

	import type { Event } from '$lib/types';

	export let events: Event[];
</script>

<Text
	>Find me on these events (needs styling) | on the right side Add a button: Show all events</Text
>
<div class="flex flex-col overflow-auto gap-1">
	{#each events.sort((a, b) => new Date(a.date) - new Date(b.date)) as event, index (event.id)}
		{#if new Date(event.date) > new Date()}
			<EventItem {event} />
		{/if}
	{/each}
</div>
