<script lang="ts">
	import EventContainer from '$lib/components/UI/Event/EventContainer.svelte';

	export let data;
</script>

{#each data.events as event}
	{event.name} {event.date} {event.time} {event.description}<br />
{/each}
<EventContainer />
