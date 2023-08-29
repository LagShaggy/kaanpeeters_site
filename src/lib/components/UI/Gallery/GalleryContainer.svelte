<script lang="ts">
	import GalleryItem from './GalleryItem.svelte';
</script>

<div class="flex flex-wrap overflow-auto gap-0.5">
	{#each Array(15) as _, index (index)}
		<GalleryItem />
	{/each}
</div>
