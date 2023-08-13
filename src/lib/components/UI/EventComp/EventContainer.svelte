<script lang="ts">
	import EventItem from './EventItem.svelte';
</script>

<div class="flex flex-col overflow-auto gap-0.5">
	{#each Array(2) as _, index (index)}
		<EventItem />
	{/each}
	{#each Array(3) as _, index (index)}
		<EventItem isPriority={false} />
	{/each}
</div>
