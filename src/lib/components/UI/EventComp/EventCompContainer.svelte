<script lang="ts">
	import EventCompItem from './EventCompItem.svelte';

</script>

<div class="flex flex-col overflow-auto gap-0.5">
    {#each Array(2) as _, index (index)}
		<EventCompItem />
	{/each}
	{#each Array(3) as _, index (index)}
		<EventCompItem isPriority = {false} />
	{/each}
</div>