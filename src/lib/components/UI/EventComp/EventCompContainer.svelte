<script lang="ts">
	import EventCompItem from './EventCompItem.svelte';
</script>

<div class="flex flex-wrap overflow-auto gap-0.5">
    {#each Array(8) as _, index (index)}
		<EventCompItem />
	{/each}
</div>